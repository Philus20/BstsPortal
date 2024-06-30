import { Component } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgxPrintModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  
}
