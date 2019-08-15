import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeModules = [
  EmployeeListComponent,
  DepartmentListComponent,
  DepartmentDetailsComponent,
  PageNotFoundComponent
];