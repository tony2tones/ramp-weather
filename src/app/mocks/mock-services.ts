import { Observable } from "rxjs";
import { Mocks } from "./mock-data";


export class MockApiService {
    public getWeather(lon:number,lat:number, numOfDays: number) {
        return new Observable((subscriber) => {
            subscriber.next(Mocks.apiResponse);
        });
    }
}

export class MockNavigator {
  geolocation: any = {
    getCurrentPosition(lon:number,lat:number, numOfDays: number) {
        return new Observable((subscriber) => {
            subscriber.next(Mocks.apiResponse);
        });
    }

}    
}
export const mockGeolocation = {
    getCurrentPosition: jest.fn()
      .mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })))
  };
