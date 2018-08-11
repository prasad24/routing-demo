import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IEmployee } from '../../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  private employeeId:string;
  private errorMessage:string;
  private employee =  {};

  constructor(private router:Router, private route:ActivatedRoute, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap) => {
      this.employeeId = param.get('id');
      this.employeeService.getEmployeeById(this.employeeId)
        .subscribe(response => {
          this.employee = response[0];
        }, 
      error => this.errorMessage = error.message);
    });
  }

  onBack() {
    this.router.navigate(['employees', { last: this.employeeId}]);
  }
}
