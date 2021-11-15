import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Mocks } from './mocks/mock-data';
import { MockApiService } from './mocks/mock-services';
import { WeatherService } from './services/weather.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserModule,
        HttpClientModule],
        providers: [{ provide: WeatherService, useClass: MockApiService },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    }));
    
    beforeEach(() => {
    
    fixture = TestBed.createComponent(AppComponent);
    window.navigator.geolocation.getCurrentPosition = jest.fn().mockReturnValue(of(Mocks.apiResponse));
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  })
  
  test('should create the app', () => {
    
    // let getCurrentPositionSpy = jest.spyOn(window.navigator, 'geolocation','get');
    // getCurrentPositionSpy = jest.fn()
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  

  describe(`should check that getForecast() is called`, () => {
    let resetForcastSpy: any;
    let getForecastSpy: any;
    let getCurrentPositionSpy: any;
    let coords: { latitude: 51.1, longitude: 45.3};

    beforeEach(() => {
      resetForcastSpy = jest.spyOn(component, 'resetForecast');
      getForecastSpy = jest.spyOn(component, 'getForecast');
      
      component.ngOnInit();
      console.log('tset test ',global.navigator.geolocation);
      
      fixture.detectChanges();
      
    })
    
    test('assert getForecast function to be called', () => {
      getCurrentPositionSpy.mockReturnValue(coords);
      // jest.spyOn(global.navigator.geolocation, 'getCurrentPosition').mockImplementation(() => {
      //   return component.successHandler(coords);
      // });
      expect(resetForcastSpy).toHaveBeenCalled();
      expect(getForecastSpy).toHaveBeenCalled();
      expect(getCurrentPositionSpy).toHaveBeenCalled();

    })

  });


});
