import { Component } from '@angular/core';
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [LeftMenuComponent, NavbarComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
