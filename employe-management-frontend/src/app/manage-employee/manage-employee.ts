import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';
import { Employee } from '../employee-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-employee',
  imports: [CommonModule , FormsModule],
  templateUrl: './manage-employee.html',
  styleUrl: './manage-employee.css',
})
export class ManageEmployee implements OnInit{
    employee : Employee [] = [];
     
  constructor (private appService : AppService){}
  ngOnInit(): void {
    this.loadEmp();
  }

  
  updateEmp(emp : Employee){
    this.appService.manageEmployee(emp.id ,emp ).subscribe(
      response => {
        Swal.fire("Updated!", "Employee updated successfully", "success");
       this.loadEmp();   
      },
      error =>{

      }
    );
  }

  loadEmp(){
    this.appService.employeeList().subscribe(
      data => {
        this.employee = data ; 
      }
    );
  }

deleteEmp(id: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This employee will be deleted permanently.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      this.appService.deleteEmployee(id).subscribe(() => {
        this.loadEmp();  // refresh list

        Swal.fire(
          'Deleted!',
          'The employee has been deleted.',
          'success'
        );
      });

    }
  });
}

}
