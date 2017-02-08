import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './components/app.component';
import {ClockComponent} from "./components/clock.component";
import {ContactListComponent} from "./components/contactList.component";
import {ContactDetailsComponent} from "./components/contactDetails.component";
import {RootStore} from "../stores/root.store";
import {ContactsStore} from "../stores/contacts.store";
import {NewContactComponent} from "./components/newContact.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        ContactListComponent,
        ContactDetailsComponent,
        NewContactComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        RootStore,
        ContactsStore
    ]
})
export class AppModule {
}
