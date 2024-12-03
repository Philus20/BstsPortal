import { Component } from '@angular/core';
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [LeftMenuComponent, NavbarComponent],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent {

}
