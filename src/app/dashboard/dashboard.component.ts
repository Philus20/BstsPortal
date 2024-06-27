import { Component, OnInit } from '@angular/core';
import { DatePipe ,CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ExamsTimeTableComponent } from '../exams-time-table/exams-time-table.component';
import { ResultsComponent } from '../results/results.component';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe,CommonModule,ScheduleComponent,ExamsTimeTableComponent,ResultsComponent,CoursesComponent], // Add DatePipe to the imports array
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe] // No need to add Router to providers array
})
export class DashboardComponent implements OnInit {

  currentDate: string = '';
  dashboard_content:boolean = true;
  schedule_content :boolean = false;
  exams_time_table :boolean = false;
  show_results : boolean = false;
  show_courses : boolean = false;

  constructor(private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    const today = new Date();
    this.currentDate = this.datePipe.transform(today, 'MMMM d, yyyy') ?? '';
  }

  showDashboard(){
    this.dashboard_content = true;
    this.schedule_content = false;
    this.exams_time_table=false;
    this.show_results = false;
    this.show_courses = false;
  }
  showSchedule(){
    this.dashboard_content = false;
    this.schedule_content = true;
    this.exams_time_table=false;
    this.show_results = false;
    this.show_courses = false;
  }
showExamsTimeTable(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.show_results = false;
  this.exams_time_table = true;
  this.show_courses = false;
}

showResults(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = true;
  this.show_courses = false;
}
showCourses(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = false;
  this.show_courses = true;
}

  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
}
