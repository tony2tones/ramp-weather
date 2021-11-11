import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if(!navigator.geolocation) {
      
    }
  }

}
