import { Component } from '@angular/core';

let componentAnnotation = new Component({
    moduleId : __moduleName,
    selector : 'my-app',
    template : `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
});

export class AppComponent {
    constructor () {
        this.title  = 'Tour of Heroes';
    }
}

AppComponent.annotations = [componentAnnotation];