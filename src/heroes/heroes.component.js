import { Component } from '@angular/core';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';


let componentDecorator = new Component({
    moduleId: __moduleName,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html'
});

export class HeroesComponent {
    constructor(router, heroService) {
        this.heroes = [];
        this.selectedHero;

        this.router = router;
        this.heroService = heroService;
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes;
            });
    }

    onSelect(hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

HeroesComponent.annotations = [componentDecorator];
HeroesComponent.parameters = [
    [Router],
    [HeroService]
];