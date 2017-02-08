import { Component } from '@angular/core';
import {RootStore} from "../../stores/root.store";
import {Contact, ContactsState, ContactsStore} from "../../stores/contacts.store";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contacts: ContactsState;

  constructor(private rootStore: RootStore, private contactsStore: ContactsStore) {
    this.contactsStore.load();
  }

  ngOnInit() {
    this.rootStore.store.subscribe(state => {
      this.contacts = state.contacts;
    });
  }
}
