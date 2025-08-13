import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
   filtro: string = '';
  @Output() search = new EventEmitter<any>();
  @Output() advancedSearch = new EventEmitter<any>();

  buscar() {
    this.search.emit(this.filtro);
  }

  busquedaAvanzada() {
    this.advancedSearch.emit("busqueda avanzada");
  }
}
