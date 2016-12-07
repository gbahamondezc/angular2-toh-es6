import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

let componentAnnotations = new Component({
    selector: 'my-hero-detail',
    inputs : ['hero'],
    templateUrl : '/app/hero-detail.component.html',
    styleUrls : ['app/hero-detail.component.css']
});

export class HeroDetailComponent {
    constructor (heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }

    ngOnInit () {
        this.route.params
            .switchMap(params => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack() {
        this.location.back();
    }
}

HeroDetailComponent.annotations = [componentAnnotations];
HeroDetailComponent.parameters = [
    [HeroService], [ActivatedRoute],
    [Location]
]