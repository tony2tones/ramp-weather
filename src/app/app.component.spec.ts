import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CelcuisConverter } from './directives/celcuisConverter.directive';
import { Mocks } from './mocks/mock-data';
import { MockApiService } from './mocks/mock-services';
import { WeatherService } from './services/weather.service';
// Jest setup issue work around 
// @ts-ignore
const mockSuccess = (success, error) => {
    success({ coords: Mocks.position.coords });
}
const mockGetcurrentPosition = jest.fn(mockSuccess);
// @ts-ignore
const mockSuccessHandler = jest.fn(() => Mocks.position.coords);
describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, CelcuisConverter
            ],
            imports: [BrowserModule,
                HttpClientModule],
            providers: [{ provide: WeatherService, useClass: MockApiService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        // @ts-ignore
        global.navigator.geolocation = { getCurrentPosition: mockGetcurrentPosition }
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    }));

    afterAll(() => {
        // @ts-ignore
        global.navigator.geolocation = global.navigator.geolocation;
    })

    test('should create the app', () => {
        expect(mockGetcurrentPosition).toHaveBeenCalled();
        expect(component).toBeTruthy();
        expect(component.forecast).toEqual(Mocks.apiResponse);
    });

    describe(`should check getWeather with success handler is called`, () => {
        let successHandlerSpy: any;
        let getWeatherSpy: any;
        let setRestOfWeekForecastSpy: any;
        let dateFormatterSpy: any;

        beforeEach(() => {
            component.dayCount = 7;
            successHandlerSpy = jest.spyOn(component, 'successHandler');
            getWeatherSpy = jest.spyOn(component, 'getWeather');
            setRestOfWeekForecastSpy = jest.spyOn(component, 'setRestOfWeekForecast');
            dateFormatterSpy = jest.spyOn(component, 'dateFormatter');
            component.successHandler(Mocks.position);
            fixture.detectChanges();
        })

        test('assert getForecast function to be called', () => {
            expect(successHandlerSpy).toHaveBeenCalled();
            expect(getWeatherSpy).toHaveBeenCalledWith(Mocks.position);
            expect(component.forecast).toEqual(Mocks.apiResponse);
            expect(component.cityName).toEqual(Mocks.apiResponse.city.name);
            expect(component.weekForecast).toEqual(Mocks.apiResponse.list);
            expect(component.todayMax).toEqual(Mocks.apiResponse.list[0].temp.max);
            expect(component.todayMin).toEqual(Mocks.apiResponse.list[0].temp.min);
            expect(setRestOfWeekForecastSpy).toHaveBeenCalledWith(Mocks.apiResponse.list);
            expect(dateFormatterSpy).toHaveBeenCalled();
            expect(component.isLoading).toBe(false);
        });
    });
});
