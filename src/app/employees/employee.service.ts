import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeApiUrl:string = '/assets/data/employees.json';

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<IEmployee[]>(this.employeeApiUrl);
        // .catchError(this.handleError);
  }

  getEmployeeById(id) {
    return this.http.get<IEmployee[]>(this.employeeApiUrl)
        .pipe(
          map(response => response.filter(emp => emp.id === id)),
          catchError(error => throwError(error))
          );
  }

  getEmployeeByDepartmentName(name) {
    return this.http.get<IEmployee[]>(this.employeeApiUrl)
        .pipe(
          map(response => response.filter(emp => emp.department === name)),
          catchError(error => throwError(error))
          );
  }

  handleError(error: HttpErrorResponse) {

  }
}
