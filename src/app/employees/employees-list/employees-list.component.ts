import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  private employees:IEmployee[] = [];
  private selectedEmployeeId:string;
  private sortBy:string;

  constructor(private employeeService: EmployeeService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      this.selectedEmployeeId = param.get('last');    
    });

    this.employeeService.getEmployees()
      .subscribe(response => {
        this.employees = response;
      })
  }

}
