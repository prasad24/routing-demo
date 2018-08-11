import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { IDepartment } from '../models/department';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentApiUrl:string = '/assets/data/departments.json';

  constructor(private http:HttpClient) { }

  getDepartments() {
    return this.http.get<IDepartment[]>(this.departmentApiUrl)
        .pipe(catchError(error => throwError(error)));
  }

  getDepartmentByName(name) {
    return this.http.get<IDepartment[]>(this.departmentApiUrl)
        .pipe(
          map(response => response.filter(dept => dept.name === name)),
          catchError(error => throwError(error))
        );
  }

  handleError(error: HttpErrorResponse) {

  }
}
