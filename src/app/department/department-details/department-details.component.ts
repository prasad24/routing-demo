import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../../employees/employee.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  private selectedDepartmentName: string;
  private department: any = {};
  private employees:any = [];
  private errorMessage: string;
  private showEmployee:boolean = false;

  constructor(
    private route:ActivatedRoute, 
    private departmentService: DepartmentService,
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.employees = [];
      this.showEmployee = false;
      this.selectedDepartmentName = param.get('name');
      this.departmentService.getDepartmentByName(this.selectedDepartmentName)
        .subscribe(response => {
            this.department = response[0];
        },
        error => this.errorMessage = error.message);
    });
  }

  showEmployees() {
    this.showEmployee = true;
    this.employeeService.getEmployeeByDepartmentName(this.selectedDepartmentName)
      .subscribe(response => this.employees = response);
  }
}
