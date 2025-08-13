import { Component } from '@angular/core';
import { Cliente } from '../../models/clientes/clientes';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActionbarComponent } from '../../components/actionbar/actionbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TableComponent } from '../../components/table/table.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { FormFieldsComponent } from '../../components/form-fields/form-fields.component';
import { FilterAdvancedComponent } from '../../components/filter-advanced/filter-advanced.component';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule,
    SidebarComponent, ActionbarComponent, SearchbarComponent,
    TableComponent, FormsModule, RouterModule,
    FilterAdvancedComponent,
    FormFieldsComponent
  ],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent {
  clientes: Cliente[] = [];
  newCliente: Cliente = { sharedKey: '', businessId: '', email: '', phone: '' };
  mensaje = '';

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clientesService.listarClientes().subscribe(data => {
      this.clientes = data;
      this.newCliente = { sharedKey: '', businessId: '', email: '', phone: '' };
    });
  }

  buscar(filtro: string) {
    if (filtro.trim() === '') {
      this.cargarClientes();
    } else {
      this.clientesService.buscarClientes(filtro).subscribe(data => {
        this.clientes = data;
      });
    }
  }

  abrirModal() {
    const modalEl = document.getElementById('addClientModal');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }



  abrirModalAvanzado() {
    const modalEl = document.getElementById('advancedSearchModal');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  buscarAvanzado(filtros: { email?: string; phone?: string; dateFrom?: string; dateTo?: string }) {
    this.clientesService.buscarClientesAvanzado(filtros).subscribe(data => {
      this.clientes = data;
    });
  }



  exportarCSV() {
    this.clientesService.exportarClientes().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'clientes.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  guardar() {
    if (!this.newCliente.sharedKey || !this.newCliente.businessId || !this.newCliente.email) {
      this.mensaje = 'Todos los campos obligatorios deben estar completos';
      return;
    }

    this.clientesService.crearCliente(this.newCliente).subscribe(() => {
      this.cargarClientes();
      const toastLiveExample = document.getElementById('liveToast')
      const toastBootstrap = new (window as any).bootstrap.Toast(toastLiveExample, {
        delay: 5000 // tiempo que dura visible (en ms)
      });
      toastBootstrap.show()

    });
  }
}