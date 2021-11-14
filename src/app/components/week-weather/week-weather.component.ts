import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent implements OnInit {
  @Input() min_temp: number = 0;
  @Input() max_temp: number = 0;
  @Input() index: number = 0;
  @Input() dateOfWeek: number = 0;
  @Output() rendingComplete: EventEmitter<any> = new EventEmitter<any>();
  // public dateOfWeek:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.rendingComplete.emit(true);
  }
}
