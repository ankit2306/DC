import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "React"},
    {"id" : 3, "name" : "Ruby"},
    {"id" : 4, "name" : "Django"},
    {"id" : 5, "name" : "Node"}
  ];
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gotoDetails(department){
    this._router.navigate(['/departments', department.id]);
  }
}
