import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actionbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actionbar.component.html',
  styleUrl: './actionbar.component.css'
})
export class ActionbarComponent {
  @Output() newClick = new EventEmitter<any>();
  @Output() exportClick = new EventEmitter<any>();
}
