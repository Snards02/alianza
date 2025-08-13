import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/clientes/clientes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
cliente: Cliente = { sharedKey: '', businessId: '', email: '', phone: '' };
  mensaje = '';

  constructor(private clientesService: ClientesService) {}

  guardar() {
    if (!this.cliente.sharedKey || !this.cliente.businessId || !this.cliente.email) {
      this.mensaje = 'Todos los campos son obligatorios';
      return;
    }

    this.clientesService.crearCliente(this.cliente).subscribe(() => {
      this.mensaje = 'Cliente creado con éxito';
      this.cliente = { sharedKey: '', businessId: '', email: '', phone: '' };
    });
  }
}