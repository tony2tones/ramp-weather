import { Component, OnInit } from '@angular/core';
import { Forecast, List } from 'src/app/models/forecast.models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  public isLoading: boolean = false;
  public forecast: Forecast = <Forecast>{};
  public weekForecast: List[] = [];
  public todayMax: number = 0;
  public todayMin: number = 0;
  public todayDate = {};
  public errormsg: string = '';
  public lon: number = 0;
  public lat: number = 0;
  public cityName: string = '';
  // default to 7 days
  public dayCount: number = 7;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // for browsers that do not have geolcation support
    if (!navigator.geolocation) {
      this.errormsg = 'geolocation not supportd';
    }
    this.getForecast();
  }


  getForecast() {
    this.resetForecast();
    navigator.geolocation.getCurrentPosition(
      this.successHandler.bind(this),
      this.errorHandler.bind(this)
    );
  }

  public successHandler(position: any): void {
    this.getWeather(position);
  }

  public errorHandler(err: any) {
    this.errormsg = 'failed to load weather please allow geolocation and refresh';
  }

  public dateFormatter() {
    const dateValue: Date = new Date();

     let day = dateValue.getDay();
      let month = dateValue.toLocaleString('default', { month: 'short'});
      let date = dateValue.getDate();
      this.todayDate = `${day} ${month} ${date}`;
    console.log(this.todayDate);
  }


  getWeather(position: any) {
    this.isLoading = true;
    console.log(this.isLoading);
    this.weatherService.getWeather(position.coords.longitude, position.coords.longitude, this.dayCount)
      .subscribe((response: Forecast) => {
        console.log(response);
        this.forecast = response;
        this.cityName = this.forecast.city.name;
        this.weekForecast = this.forecast.list;

        this.todayMax = this.weekForecast[0].temp.max;
        this.todayMin = this.weekForecast[0].temp.min;
        this.dateFormatter();
        this.isLoading = false;
      }
        ,
        (error) => {
          console.log(error);
          this.isLoading = false;
        });
  }

  resetForecast() {
    this.forecast = <Forecast>{};
  }
}
function Tempertrues(arg0: any, Tempertrues: any) {
  throw new Error('Function not implemented.');
}

