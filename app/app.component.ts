import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
    ];
  }
}

export interface Contact {
    id: number;
    name: string;
}
