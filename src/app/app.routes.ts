import { Routes } from '@angular/router';
import { ClientesListComponent } from './views/clientes-list/clientes-list.component';

export const routes: Routes = [
    { path: 'clientes', component: ClientesListComponent },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
