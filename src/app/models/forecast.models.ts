import { Weather } from "./weather.model";


export interface Forecast {
    city: City;
    list: List[];
}

export interface City {
    name: string;
    coord: Coord;
}
export interface Position {
    coords: Coord;
}

export interface Coord {
    longitude: number;
    latitude: number;
}

export interface List {
    weather: Weather[];
    temp: Temp;
    day?: number;
}

export interface Temp {
    min: number;
    max: number;
}


