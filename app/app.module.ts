import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './components/app.component';
import {ClockComponent} from "./components/clock.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
    ]
})
export class AppModule {
}
