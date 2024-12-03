import { Component } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgxPrintModule, LeftMenuComponent, NavbarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  
}
