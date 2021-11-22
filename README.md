# RampWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.
The weather application uses [Material Icons](https://google.github.io/material-design-icons/).  

In this project, seeing that I needed to have a 7 day forecast including today. I have used the following 
[api](https://openweathermap.org/forecast16_) that provides a forecast for the next 16 days.


>I have managed to fix my jest issue and is now runnig via the command line, however this project
is unfortunately not running via webpack, the project will run using ng serve as oppose to using webpack.


## Project setup and how to get your API key

Weather data is coming from [Open weather API](https://openweathermap.org/api), 
which requires registration and you will need to add your OpenWeatherAPI key as seen in the services file.

once you have your api key, run the following command line to install all the required npm packages.

```
npm install
```

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
npm run start
```

## runing unit tests with Jest

Unit tests can be run using the following command line to execute the unit tests via [Jest](https://jestjs.io/docs/getting-started).

    npm run test

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
