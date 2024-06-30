import { Component } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-exams-time-table',
  standalone: true,
  imports: [NgxPrintModule],
  templateUrl: './exams-time-table.component.html',
  styleUrl: './exams-time-table.component.scss'
})
export class ExamsTimeTableComponent {
  isPrintPreviewVisible: boolean = false;

  showPrintPreview() {
    this.isPrintPreviewVisible = true;
  }
}
