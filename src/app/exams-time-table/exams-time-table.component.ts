import { Component } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-exams-time-table',
  standalone: true,
  imports: [NgxPrintModule, LeftMenuComponent, NavbarComponent],
  templateUrl: './exams-time-table.component.html',
  styleUrl: './exams-time-table.component.scss'
})
export class ExamsTimeTableComponent {
  isPrintPreviewVisible: boolean = false;

  showPrintPreview() {
    this.isPrintPreviewVisible = true;
  }
}
