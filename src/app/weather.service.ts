import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class WeatherService {

  apiKey='bb61b82b2ed1eafacaa68df5ba78cb9b';
  private url;
  constructor(private http: HttpClient) {
    this.url='http://api.openweathermap.org/data/2.5/weather?zip=';
  }
  getWeather(zip) : Observable<any> {
    return this.http.get(this.url + zip +',' + 'us' + '&APPID='+this.apiKey)
      .pipe(
        tap( res => console.log(res)),
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse): ErrorObservable {
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return new ErrorObservable(errorMessage);
  }
}
