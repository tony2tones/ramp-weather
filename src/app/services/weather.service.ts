import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WeatherService {

    apiKey: string = '53f9d8e4213222cf517d86dc406d67fc';

    url: string = 'http://api.openweathermap.org/data/2.5/forecast/daily';

    constructor(private http: HttpClient) { }

    public getWeather(lon: number, lat: number, numOfDays: number): Observable<any> {
        return this.http.get(`${this.url}?lat=${lat}&lon=${lon}&cnt${numOfDays}&appid=${this.apiKey}`);
    }
}