import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = "Angular2 Min Seed";
    }
}
