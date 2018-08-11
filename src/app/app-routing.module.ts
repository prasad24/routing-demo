import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

const routes: Routes = [
  {
    path:"", redirectTo:"employees", pathMatch:"full"
  },
  {
    path:"employees",
    children: [
      {path:"", component:EmployeesListComponent},
      {path:"employee/:id", component:EmployeeDetailsComponent}
    ]
  },
  {
    path:"departments", component:DepartmentListComponent
  },
  {
    path:"departments/department/:name", component:DepartmentListComponent
  }  
];

export const RoutingComponents = [
  EmployeesListComponent,
  EmployeeDetailsComponent,
  DepartmentListComponent,
  DepartmentDetailsComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
