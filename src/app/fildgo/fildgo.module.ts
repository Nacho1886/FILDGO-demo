import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FildgoComponent } from './fildgo.component';
import { AppLayoutModule } from '../layout/app.layout.module';



@NgModule({
  declarations: [
    FildgoComponent
  ],
  imports: [
    CommonModule,
    AppLayoutModule
  ]
})
export class FildgoModule { }
