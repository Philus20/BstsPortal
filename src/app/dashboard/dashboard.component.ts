import { Component, OnInit,ViewChild } from '@angular/core';
import { DatePipe ,CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ExamsTimeTableComponent } from '../exams-time-table/exams-time-table.component';
import { ResultsComponent } from '../results/results.component';
import { CoursesComponent } from '../courses/courses.component';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe,CommonModule,ScheduleComponent,ExamsTimeTableComponent,ResultsComponent,CoursesComponent,
    AnnouncementComponent, AccountSettingsComponent,NgbCarouselModule,FormsModule,LeftMenuComponent,NavbarComponent
  ], // Add DatePipe to the imports array
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe,NgbModalConfig, NgbModal] ,// No need to add Router to providers array
  
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
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
   images = ['entrance2.jpg','assembly_hall.png'].map((filename) => `../../assets/${filename}`);
  

  constructor(private datePipe: DatePipe, private router: Router,	config: NgbModalConfig,
		private modalService: NgbModal) {
    
     }

   showAppMenu = false
   showAppMenuContent(){
    this.showAppMenu =!this.showAppMenu;
   }

   closeMenu() {
    if (this.showAppMenu) {
      this.showAppMenu = false;
    }
  }
	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}


     open(content: any) {
      this.modalService.open(content);
    }

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
    this.closeMenu()

  }
  showSchedule(){
    this.dashboard_content = false;
    this.schedule_content = true;
    this.exams_time_table=false;
    this.show_results = false;
    this.show_courses = false;
    this.show_announcements = false;
    this.show_accountsettings = false;
    this.closeMenu()

  }
showExamsTimeTable(){
  this.dashboard_content = false;
  this.schedule_content = false;
  this.show_results = false;
  this.exams_time_table = true;
  this.show_courses = false;
  this.show_announcements = false;
  this.show_accountsettings = false;
  this.closeMenu()
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
