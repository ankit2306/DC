import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public id : number;

  constructor(private _activatedRoute : ActivatedRoute, private _route : Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((_param : ParamMap) => {
      this.id = parseInt(_param.get('id'));
    });  
  }

  gotoPrev(){
    this._route.navigate(['/departments', this.id - 1]);
  }

  gotoNext(){
    this._route.navigate(['/departments', this.id + 1]);
  }

  goBack(){
    this._route.navigate(['/departments']);
  }
}
