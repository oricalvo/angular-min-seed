import {Component, Input} from '@angular/core';
import {ContactsStore} from "../../stores/contacts.store";

@Component({
  selector: "my-new-contact",
  moduleId: module.id,
  templateUrl: "./newContact.component.html",
  styleUrls: ["./newContact.component.css"]
})
export class NewContactComponent {
  name: string;

  constructor(private contactStore: ContactsStore) {
  }

  add() {
    if(!this.name) {
      return;
    }

    this.contactStore.addContact({id: -1, name: this.name});
  }
}
