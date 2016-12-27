import { Component } from '@angular/core';
@Component({
  selector: "my-clock",
  moduleId: module.id,
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent {
  time: Date;

  constructor() {
  }

  ngOnInit() {
    this.time = new Date();

    setInterval(()=> {
      this.time = new Date();
    }, 1000);
  }
}
