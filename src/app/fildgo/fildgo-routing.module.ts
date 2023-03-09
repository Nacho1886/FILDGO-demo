import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Table' }, loadChildren: () => import('./pages/table/custom-table.module').then(m => m.CustomTableModule) },
        { path: 'crud', loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudModule) },
        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class FildgoRoutingModule { }
