import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OpencloseComponent } from './openclose/openclose.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ExamsTimeTableComponent } from './exams-time-table/exams-time-table.component';
import { ResultsComponent } from './results/results.component';
import { CoursesComponent } from './courses/courses.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
export const routes: Routes = [
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(c=>c.AdminModule)},
    // { path: '', redirectTo: '/animation', pathMatch: 'full' },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'time', loadComponent:()=>import('./exams-time-table/exams-time-table.component').then(c=>c.ExamsTimeTableComponent) },
   { path: 'results', loadComponent: () => import('./results/results.component').then(c => c.ResultsComponent) },
   { path: 'programme', loadComponent: () => import ('./courses/courses.component').then(c => c.CoursesComponent) },
  
   { path: 'announcement', loadComponent: () => import ('./announcement/announcement.component').then(c => c.AnnouncementComponent) },
   { path: 'account', loadComponent: () => import ('./account-settings/account-settings.component').then(c => c.AccountSettingsComponent) },


      // {path:'animation', component: OpencloseComponent},
    {path:"schedule", loadComponent :() => import('./schedule/schedule.component').then(c => c.ScheduleComponent)},
    {path:"left", component:LeftMenuComponent}
    // {path:"acc",component:AccountSettingsComponent},
    // {path:"signup",component: SignUpComponent},
    // {path:"form",component: ReactiveFormsComponent}

];   
