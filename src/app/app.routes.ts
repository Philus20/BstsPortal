import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
    {path:"schedule", component:ScheduleComponent}

];   
