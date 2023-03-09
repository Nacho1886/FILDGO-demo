import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FildgoRoutingModule } from './fildgo-routing.module';
import { TableModule } from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FildgoRoutingModule,
    TableModule
  ]
})
export class FildgoModule { }
