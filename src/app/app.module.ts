import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { WeekWeatherComponent } from './components/week-weather/week-weather.component';
import { CelcuisConverter } from './directives/celcuisConverter.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekWeatherComponent,
    CelcuisConverter,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
