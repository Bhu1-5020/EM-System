import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee-model';


@Injectable({
  providedIn: 'root',
})
export class AppService {
 
     private backendUrl = "http://localhost:8080/employee";

     constructor (private http : HttpClient){}

     addEmployee(employee : Employee) : Observable<Employee>{
      return this.http.post<Employee>(this.backendUrl , employee);
     }

     employeeList() : Observable<Employee[]>{
      return this.http.get<Employee[]>(this.backendUrl);
     }

     manageEmployee(id: number, employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.backendUrl}/${id}`, employee);
}
     deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${id}`);
  } 
}
