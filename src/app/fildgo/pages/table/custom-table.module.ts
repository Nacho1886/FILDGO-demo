import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';

import { CustomTableComponent } from './custom-table.component';
import { CustomTableRoutingModule } from './custom-table-routing.module';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
		CustomTableRoutingModule,
		DividerModule,
		SplitterModule,
		PanelModule
	],
	declarations: [CustomTableComponent],
	exports: [CustomTableComponent]
})
export class CustomTableModule { }
