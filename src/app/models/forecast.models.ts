export interface Forecast {
    city: City;
    list: List[];
}

export interface List {
    weather: Weather[];
    temp: Temp;
    day?: number;
}

export interface Weather {
    description: string;
    icon: string;
    main: string;
}

export interface Temp {
    min: number;
    max: number;
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

