import { Component } from '@angular/core';
import { HeroService } from './hero.service';


let componentDecorator  = new Component({
    selector : 'my-dashboard',
    templateUrl : '/app/dashboard.component.html',
    providers : [
        HeroService
    ]
    ,
    styleUrls : [ 'app/dashboard.component.css' ]
});


export class DashboardComponent {
    constructor (heroService) {
        this.heroService = heroService;
    }

    ngOnInit () {
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }
 }

DashboardComponent.annotations = [componentDecorator];
DashboardComponent.parameters  = [[HeroService]];