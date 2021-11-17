import { Component, OnInit } from '@angular/core';
import { Forecast, List, Position } from 'src/app/models/forecast.models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  public hasLoaded: boolean = false;
  public noData: boolean = false;
  public forecast: Forecast = <Forecast>{};
  public weekForecast: List[] = [];
  public sortedForecast: List[] = [];
  public dateOfWeek: number = 0;
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
      this.errormsg = 'geolocation not supported';
    }
    this.getForecast();
  }


  public getForecast() {
    this.resetForecast();
    navigator.geolocation.getCurrentPosition(
      this.successHandler.bind(this),
      this.errorHandler.bind(this)
    );
  }

  public successHandler(position: Position): void {
    this.getWeather(position);
  }

  public errorHandler(err: any) {
    this.noData = true;
    this.isLoading = false;
    this.errormsg = `${err.statusText}`;
  }

  public dateFormatter() {
    const dateValue: Date = new Date();
    let day = dateValue.getDate();
    let month = dateValue.toLocaleString('default', { month: 'short' });
    this.todayDate = `${day} ${month}`;
  }

  public futureDateFormatter(weeklyForcast: List[]) {
    let restOfWeek = weeklyForcast;
    let index = 1;
    for (let i = 0; i < restOfWeek.length; i++) {
      // Add date day to the day of the week data collection
      let dayOfweek = new Date(Date.now() + (index + i) * 86400000);
      restOfWeek[i].day = dayOfweek.getDate();
    }
    this.sortedForecast = restOfWeek;
  }

  public getWeather(position: Position): void {
    this.isLoading = true;
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude, this.dayCount)
      .subscribe((response: Forecast) => {
        this.forecast = response;
        this.cityName = this.forecast.city.name;
        this.weekForecast = this.forecast.list;
        this.todayMax = this.weekForecast[0].temp.max;
        this.todayMin = this.weekForecast[0].temp.min;

        this.setRestOfWeekForecast(this.weekForecast);
        this.dateFormatter();
        this.isLoading = false;
      },
        (error) => {
          this.errorHandler(error);
          this.noData = true;
          this.isLoading = false;
        });
  }

  setRestOfWeekForecast(weeklyForcast: List[]): void {
    weeklyForcast.shift();
    this.futureDateFormatter(weeklyForcast);
  }

  resetForecast(): void {
    this.forecast = <Forecast>{};
  }
}

