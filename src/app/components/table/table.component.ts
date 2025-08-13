import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/clientes/clientes';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() clientes: Cliente[] = [];
}
