import { Component } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  Visibility=true;
  details = null;
  errorMsg = null;
  
  constructor (private _service : DetailsService) { }

  ngOnInit(){
      this._service.getDetails().subscribe(data => this.details = data, error => this.errorMsg = error);
  }

  changeVisibility()
  {
    this.Visibility=false;
  }

  toggleVisibility()
  {
    this.Visibility = this.Visibility === true ? false : true;
  }
}
