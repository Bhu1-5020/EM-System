import { Component, ViewChild } from '@angular/core';
import { AppService } from '../app-service';
import { Employee } from '../employee-model';
import {  FormsModule, NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-employee',
  imports: [FormsModule ],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  
    employee : Partial<Employee> = {}
  
  constructor(private appService : AppService){}

  onSubmit(){
   
    this.appService.addEmployee(this.employee as Employee).subscribe(
      response=>{
        Swal.fire({
         icon : "success",
         title : "Add Successfully",
         text : "New Employee Add Successfully",
         confirmButtonText : "Ok"
         
        });
       this.employee = {};
      } ,
      error => {
           Swal.fire({
          icon : 'error',
          title : ' Unsuccessfully',
          text : 'Employee not  Added',
          confirmButtonText : 'Ok'
        });

      } );
      
      
  }
}
