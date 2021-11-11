import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  public forecast: Forecast | undefined;
  public errormsg: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // for browsers that do not have geolcation support
    if (!navigator.geolocation) {
      this.errormsg = 'geolocation not supportd'
    }
    this.getForecast();
  }


  getForecast() {
    this.resetForecast();
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }
  public success(pos: any) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  public error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  // this.weatherService.getWeather().subscribe((data) => {
  //   console.log('this is the weather',data);
  // })

  resetForecast() {
    this.forecast = undefined;
  }

}
