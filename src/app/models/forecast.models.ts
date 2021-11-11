import { Main } from "./main.models";
import { Weather } from "./weather.model";


export interface Forecast {
    list: List,
    name: string,
    main: Main | string,
    city: City,
    weather: Weather[]
}

export interface City {
    coord: Coord,
    name: string,
}

export interface List {
    temperature: Tempertrues
}

export interface Tempertrues {
    max: number,
    min: number
}

export interface Coord {
    lot: number,
    lat: number
}
