import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

let serviceAnnotations = new Injectable();

export class HeroService {
    getHeroes() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(HEROES);
            }, 1000);
        });
    }
}

serviceAnnotations.annotations = [serviceAnnotations];