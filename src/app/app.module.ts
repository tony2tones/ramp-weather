import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { WeatherService } from './services/weather.service';
import { WeekWeatherComponent } from './components/week-weather/week-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    WeekWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
