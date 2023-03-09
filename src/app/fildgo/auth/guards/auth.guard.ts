import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isUser() {
    this.router.navigate(['/starships'])
    return false
  }
  
  isGuestWithoutEmail() {
    this.router.navigate(['/auth/email-adress'])
    return false
  }

  guestHaveEmail(): Observable<boolean> {
    return this.authService.email$.pipe(
      map(emailExist => emailExist ? true : false)
    )
  }

  isValid(path: string | undefined, userExist: User | undefined) {
    const userCantAuth = path === 'auth' && userExist
    const guestCantSeeShips = path === 'starships' && !userExist
    
    if (userCantAuth) return this.isUser()
    if (guestCantSeeShips) return this.isGuestWithoutEmail()
    return true
  }

  canLoad({ path }: Route): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => this.isValid(path, userExist))
    )
  }
  canActivate({ url }: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => this.isValid(url[0].path, userExist))
    )
  }
}
