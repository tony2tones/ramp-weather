import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WeatherService {

    apiKey = 'YOUR_API_KEY';
    url = 'http://api.openweathermap.org/data/2.5/forecast/daily'

    constructor(private http: HttpClient) { }

    getWeather(lon:number, lat: number, numOfDays: number): Observable<any> {
        return this.http.get(`${this.url}?lat=${lat}&lon=${lon}&cnt${numOfDays}&appid=${this.apiKey}`);
    }
}