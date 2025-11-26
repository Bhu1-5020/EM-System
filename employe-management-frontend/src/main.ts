import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { AddEmployee } from './app/add-employee/add-employee';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { EmployeeList } from './app/employee-list/employee-list';
import { ManageEmployee } from './app/manage-employee/manage-employee';

const routes : Routes =[
  {path : 'add-employee' , component : AddEmployee},
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {path : 'employee-list' , component : EmployeeList},
  {path : 'manage-employee' , component : ManageEmployee}

];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
