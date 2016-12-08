import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HEROES } from './mock-heroes';

export class HeroService {
    constructor(http) {
        this.http = http;
    }

    getHeroes() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(HEROES);
            }, 0);
        });
    }

    getHero(id) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getPost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .toPromise()
            .then(response => {
                return response.json();
            });
    }
}

HeroService.parameters = [
    [Http]
];