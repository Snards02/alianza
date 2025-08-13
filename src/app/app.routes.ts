import { Routes } from '@angular/router';
import { ClientesListComponent } from './views/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './views/cliente-form/cliente-form.component';

export const routes: Routes = [
    { path: 'clientes', component: ClientesListComponent },
    { path: 'nuevo-cliente', component: ClienteFormComponent },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
