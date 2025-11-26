import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-side-navbar',
  imports: [RouterLink],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css',
})
export class SideNavbar {
      addEmployee = {
         label : "Add Employee",
         routerLink : "/add-employee"
      };

      employeeList = {
        label : "Employee List",
        routerLink : "/employee-list"
      };

      manageEmp = {
        label : "Manage Employee",
        routerLink : "/manage-employee"
      }
}
