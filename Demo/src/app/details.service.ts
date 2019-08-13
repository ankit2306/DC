import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class DetailsService {

  private _url = "https://localhost:44347/api/values";

  constructor(private http: HttpClient) { }

  getDetails() : Observable<string[]>{
    return this.http.get<string[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
      return throwError(error.message || "Server Error");
  }
}