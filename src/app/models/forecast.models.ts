import { Weather } from "./weather.model";


export interface Forecast {
    city: City;
    list: List[];
}

export interface City {
    name: string;
    coord: Coord;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface List {
    weather: Weather[];
    temp: Temp;
    day?: number | undefined;
}

export interface Temp {
    min: number;
    max: number;
}

