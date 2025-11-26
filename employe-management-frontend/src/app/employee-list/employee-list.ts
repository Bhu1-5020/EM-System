import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';
import { Employee } from '../employee-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
     employees : Employee [] = [];
    constructor (private appService : AppService){}
  ngOnInit(): void {
    this.viewList();
  }
     viewList() {
    this.appService.employeeList().subscribe(
      data => {
        this.employees = data; 
      },
      error => {
        console.error('Error fetching employee list', error);
      }
    );
  }
}
