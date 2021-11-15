import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent {
  @Input() min_temp: number = 0;
  @Input() max_temp: number = 0;
  @Input() index: number = 0;
  @Input() dateOfWeek: number = 0;
  @Output() rendingComplete: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewChecked() {
    this.rendingComplete.emit(true);
  }
}
