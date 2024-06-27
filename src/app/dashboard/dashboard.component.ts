import { Component, OnInit } from '@angular/core';
import { DatePipe ,CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ExamsTimeTableComponent } from '../exams-time-table/exams-time-table.component';
import { ResultsComponent } from '../results/results.component';
import { CoursesComponent } from '../courses/courses.component';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe,CommonModule,ScheduleComponent,ExamsTimeTableComponent,ResultsComponent,CoursesComponent,
    AnnouncementComponent, AccountSettingsComponent
  ], // Add DatePipe to the imports array
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
  show_announcements : boolean = false;
  show_accountsettings : boolean = false;

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
    this.show_announcements = false;
    this.show_accountsettings = false;

  }
  showSchedule(){
    this.dashboard_content = false;
    this.schedule_content = true;
    this.exams_time_table=false;
    this.show_results = false;
    this.show_courses = false;
    this.show_announcements = false;
    this.show_accountsettings = false;

  }
showExamsTimeTable(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.show_results = false;
  this.exams_time_table = true;
  this.show_courses = false;
  this.show_announcements = false;
  this.show_accountsettings = false;

}

showResults(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = true;
  this.show_courses = false;
  this.show_announcements = false;
  this.show_accountsettings = false;

}
showCourses(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = false;
  this.show_courses = true;
  this.show_announcements = false;
  this.show_accountsettings = false;

}
showAnnouncements(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = false;
  this.show_courses = false;
  this.show_accountsettings = false;
  this.show_announcements = true;

}

showAccount(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.exams_time_table = false;
  this.show_results = false;
  this.show_courses = false;
  this.show_announcements = false;
  this.show_accountsettings = true;
}

  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
}
