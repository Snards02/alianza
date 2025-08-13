import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-advanced',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-advanced.component.html',
  styleUrl: './filter-advanced.component.css'
})
export class FilterAdvancedComponent {
   email: string = '';
  phone: string = '';
  dateFrom: string = '';
  dateTo: string = '';

  @Output() advancedSearch = new EventEmitter<{ email?: string; phone?: string; dateFrom?: string; dateTo?: string }>();

  emitirBusqueda() {
    this.advancedSearch.emit({
      email: this.email,
      phone: this.phone,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    });

    const modalEl = document.getElementById('advancedSearchModal');
    if (modalEl) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    }
  }
}
