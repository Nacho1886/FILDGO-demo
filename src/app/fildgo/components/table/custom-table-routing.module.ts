import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CustomTableComponent }
	])],
	exports: [RouterModule]
})
export class CustomTableRoutingModule { }
