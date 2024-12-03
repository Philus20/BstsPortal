import { Component } from '@angular/core';
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [LeftMenuComponent, NavbarComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
