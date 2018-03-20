import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _zipCode;

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }



  weather: any;
  errorMessage: String;
  weatherReportAvaiale: boolean = false;
  isError: boolean = false;
  constructor(private _weatherService : WeatherService) {

  }

  ngOnInit() {}

  checkZipCode(){
    this._weatherService.getWeather(this._zipCode)
      .subscribe( (response) => {
          this.isError = false;
          this.weatherReportAvaiale = true;
          console.log(response);
          this.weather = response;
        },
      (error : any ) => {
        this.weatherReportAvaiale= false;
        this.isError= true;
        this.errorMessage = <any>error;
        }
      )
  }

}
