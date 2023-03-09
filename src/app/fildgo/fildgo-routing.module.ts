import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Table' }, loadChildren: () => import('./components/table/table.module').then(m => m.CustomTableModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class FildgoRoutingModule { }
