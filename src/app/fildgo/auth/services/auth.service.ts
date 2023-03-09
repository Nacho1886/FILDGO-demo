import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, concatMap, map, share, tap } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';

import { Account } from '../../interfaces/account.interface';
import { User } from '../../interfaces/user.interface';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public email$: BehaviorSubject<string>
  private _id$: BehaviorSubject<string>


  public emailPattern: RegExp = /^[a-z0-9.%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/
  public passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
  public namePattern: RegExp = /^[A-Za-z]+$/


  private _urlJsonServer: string = `${environment.API_URL}users/`;

  constructor(
    private http: HttpClient,
    private router: Router,
    // private jwtService: JwtHelperService,
    private localSt: LocalStorageService
  ) {
    this.email$ = new BehaviorSubject('')
    this._id$ = new BehaviorSubject(this.localSt.retrieve('user') ?? undefined)
    this.localSt.observe('user').subscribe((value) => this._id$.next(value))
  }

  get user(): Observable<string | undefined> { return this._id$.asObservable().pipe(share()) }


  validateExistEmail(email: string): Observable<Account> {
    this.email$.next(email)
    return this.http.get<Account>(this._urlJsonServer + email)
  }

  authPasswordUser(password: string): Observable<string | undefined> {

    const email: string = this.email$.getValue()

    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      map(user => {
        if (user && user.password === password)
          return user.id
        return undefined
      })
    )
  }

  createAndLogin(form: FormGroup) {
    this.createNewAccount(form).pipe(
      concatMap(() => this.loginUser(form))
    ).subscribe()
  }

  createNewAccount(form: FormGroup): Observable<Object> {
    const { email, username, password } = form.value;

    const newAccount: Account = {
      id: email,
      username,
      password
    }

    return this.http.post(this._urlJsonServer, newAccount).pipe(
      tap((response) => console.log('Account successfuly created ', response))
    )
  }

  loginUser(form: FormGroup): Observable<string | undefined> {
    const password = form.get('password')!.value;
    return this.authPasswordUser(password).pipe(
      tap((obs) => {
        if (obs) {
          this.router.navigate(['/'])
        this.email$.next('')
        return this.saveUserStorage(this.localSt, obs)
        }
      })
    );
  }

  saveUserStorage(localSt: LocalStorageService, id: string | undefined) { localSt.store('id', id) }

  logout(localSt: LocalStorageService) {
    localSt.clear('user')
    const firstPath = this.router.routerState.snapshot.root.firstChild?.url[0].path
    if (firstPath === 'crud') this.router.navigate(['/'])
  }
}
