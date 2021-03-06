import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelcuisConverter } from '../../directives/celcuisConverter.directive';

import { WeekWeatherComponent } from './week-weather.component';

describe('WeekWeatherComponent', () => {
  let component: WeekWeatherComponent;
  let fixture: ComponentFixture<WeekWeatherComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [WeekWeatherComponent, CelcuisConverter],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('checkout emitter', () => {
    let emitterSpy: any;

    beforeEach(() => {
      emitterSpy = jest.spyOn(component.rendingComplete, 'emit');
      component.ngAfterViewChecked();
      fixture.detectChanges();
    });

    test('assert emitter', () => {
      expect(emitterSpy).toHaveBeenCalledWith(true);
    })
  });
});

