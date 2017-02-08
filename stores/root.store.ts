import {ServiceStore} from "txsvc/ServiceStore";
import {appStore} from "./appStore";
import {ContactsStore, ContactsState} from "./contacts.store";
import {Injectable} from "@angular/core";

export interface AppState {
    contacts: ContactsState;
}

@Injectable()
export class RootStore {
    public store: ServiceStore<AppState> = new ServiceStore<AppState>(appStore, {
        initialState: {
            contacts: null,
        },
        path: "/"
    });

    constructor(contactsStore: ContactsStore) {
        appStore.init([
            contactsStore.store
        ]);
    }
}
