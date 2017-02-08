import {ServiceStore} from "txsvc/ServiceStore";
import {Transaction} from "txsvc/decorators";
import {appStore} from "./appStore";
import {Injectable} from "@angular/core";

export interface Contact {
    id: number;
    name: string;
}

export interface ContactVM extends Contact {
    selected: boolean;
}

export interface ContactsState {
    all: Contact[];
    displayed: ContactVM[];
}

@Injectable()
export class ContactsStore {
    public store: ServiceStore<ContactsState> = new ServiceStore<ContactsState>(appStore, {
        initialState: {
            all: null,
            displayed: null,
        },
        path: "contacts"
    });

    constructor() {
    }

    get state(): ContactsState {
        return this.store.getState();
    }

    @Transaction()
    load() {
        const contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ]

        return Promise.resolve({
            all: contacts,
            displayed: contacts.map(c=>({...c, selected: false}))
        }as Partial<ContactsState>);
    }
    
    @Transaction()
    addContact(contact: Contact) {
        return Promise.resolve({
            all: this.state.all.concat([contact]),
            displayed: this.state.displayed.concat([{...contact, selected: false}])
        });
    }

}
