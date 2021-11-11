import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WeatherService {

    apiKey = '53f9d8e4213222cf517d86dc406d67fc';
    url = 'http://api.openweathermap.org/data/2.5/weather'

    constructor(private http: HttpClient) { }

    getWeather(lon:number, lat: number) {
        return this.http.get(`${this.url}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
    }
}