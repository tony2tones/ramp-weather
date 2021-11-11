import { Main } from "./main.models";
import { Weather } from "./weather.model";

export interface Forecast {
    base: string,
    name: string,
    main: Main,
    weather: Weather[]
}