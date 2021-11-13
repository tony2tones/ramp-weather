import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'celcuisConverter'})
export class CelcuisConverter implements PipeTransform {

    transform(fh: number): string {
        var cel = Math.round(parseInt(String(fh), 10) - 273.15);
        return `${cel}°`;
    }
}