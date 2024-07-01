import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OpencloseComponent } from './openclose/openclose.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/animation', pathMatch: 'full' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },

      {path:'animation', component: OpencloseComponent},
    {path:"schedule", component:ScheduleComponent},
    {path:"acc",component:AccountSettingsComponent}

];   
