import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/clientes/clientes';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {
  @Input() cliente!: Cliente;
  @Output() clienteChange = new EventEmitter<Cliente>();

  actualizarCampo(campo: keyof Cliente, valor: any) {
    this.cliente = { ...this.cliente, [campo]: valor };
    this.clienteChange.emit(this.cliente);
  }
}
