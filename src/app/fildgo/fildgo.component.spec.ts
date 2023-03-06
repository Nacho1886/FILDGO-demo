import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FildgoComponent } from './fildgo.component';

describe('FildgoComponent', () => {
  let component: FildgoComponent;
  let fixture: ComponentFixture<FildgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FildgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FildgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
