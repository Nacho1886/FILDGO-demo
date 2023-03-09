import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './custom-table.component.html',
    providers: [MessageService, ConfirmationService]
})
export class CustomTableComponent implements OnInit {

    products: Product[] = [];

    expandedRows: expandedRows = {};

    isExpanded: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private productsService: ProductsService
        ) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe(data =>{
            this.products = data
            this.loading = false;
        });
    }


    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    /* formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } */
    
}