import { Component } from '@angular/core';
import { HeroService } from '../heroes/hero.service';


let componentDecorator  = new Component({
    moduleId : __moduleName,
    selector : 'my-dashboard',
    templateUrl : 'dashboard.component.html',
    providers : [
        HeroService
    ],
    styleUrls : [ 'dashboard.component.css' ]
});


export class DashboardComponent {
    constructor (heroService) {
        this.heroService = heroService;
    }

    ngOnInit () {
        this.heroService.getPost()
            .then(posts => {
                console.log('posts ', posts);
            });

        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }
 }

DashboardComponent.annotations = [componentDecorator];
DashboardComponent.parameters  = [[HeroService]];