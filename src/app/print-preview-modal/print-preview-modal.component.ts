import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-print-preview-modal',
  standalone: true,
  imports: [],
  templateUrl: './print-preview-modal.component.html',
  styleUrl: './print-preview-modal.component.scss'
})
export class PrintPreviewModalComponent {
  @Input() isVisible: boolean = false;

  close() {
    this.isVisible = false;
  }

  print() {
    window.print();
  }
}
