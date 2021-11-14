import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent implements OnInit {
  @Input() dateOfWeek: string = '';
  @Input() min_temp: number = 0;
  @Input() max_temp: number = 0;
  @Input() index: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
