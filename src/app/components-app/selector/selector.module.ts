import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectorRoutingModule} from './selector-routing.module';
import {SelectorComponent} from "./selector/selector.component";
import {SelectComponent} from "./selector/serlect/select.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SelectorComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    SelectorRoutingModule,
    ReactiveFormsModule
  ]
})
export class SelectorModule {
}
