import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  private selectedDepartmentName:string;
  private errorMessage: string;
  private departments = [];

  constructor(private router: Router, private route:ActivatedRoute, private departmentService:DepartmentService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      this.selectedDepartmentName = param.get('name');    
    });

    this.departmentService.getDepartments()
      .subscribe(response => {
          this.departments = response;

          if(!this.selectedDepartmentName) {
            this.router.navigate(['/departments/department/' + this.departments[0].name]);
          }      
        },
        error => this.errorMessage = error.message);  
  }
}
