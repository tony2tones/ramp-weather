import { Observable } from "rxjs";


export class MockApiService {
    public getWeather(lon:number,lat:number, numOfDays: number) {
        return new Observable((subscriber) => {
            subscriber.next(Mocks.apiResponse);
        });
    }
}