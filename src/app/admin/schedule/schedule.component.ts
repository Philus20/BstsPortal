import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ReactiveFormsModule,LeftMenuComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
