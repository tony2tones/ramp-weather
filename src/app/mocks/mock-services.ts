/* istanbul ignore file */
import { Observable } from "rxjs";
import { Mocks } from "./mock-data";

export class MockApiService {
  public getWeather(lon: number, lat: number, numOfDays: number) {
    return new Observable((subscriber) => {
      subscriber.next(Mocks.apiResponse);
    });
  }
};

