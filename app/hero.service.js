import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

let serviceAnnotations = new Injectable();

export class HeroService {
    getHeroes () {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(HEROES);
            }, 0);
        });
    }

    getHero (id) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}

serviceAnnotations.annotations = [serviceAnnotations];