import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components-app/app/app.component';
import {HomeComponent} from './components-app/home/home.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {rout} from "./comstant/rout";
import {SelectorComponent} from './components-app/selector/selector/selector.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectComponent} from './components-app/selector/selector/serlect/select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rout),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
