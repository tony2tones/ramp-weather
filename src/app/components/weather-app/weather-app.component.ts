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
  public weekForecast: List = <List>{};
  public today:any = [];
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


  getWeather(position: any) {
    this.isLoading = true;
    console.log(this.isLoading);
    this.weatherService.getWeather(position.coords.longitude, position.coords.longitude, this.dayCount)
      .subscribe((forecast: Forecast) => {
        this.forecast = forecast;
        this.cityName = this.forecast.city?.name;
        this.weekForecast = this.forecast.list;
        this.weekForecast = this.weekForecast;
        console.log(this.weekForecast);
        this.today = Object.entries(this.weekForecast);

        console.log(this.today);
        // this.forecast.list.map((tempDeet) => {
        //   console.log(tempDeet.temp);
        // });
        this.isLoading = true;
      }
        ,
        (error) => {
          console.log(error);
          this.isLoading = true;
        });
  }

  resetForecast() {
    this.forecast = <Forecast>{};
  }
}
function Tempertrues(arg0: any, Tempertrues: any) {
  throw new Error('Function not implemented.');
}

