import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {Nar} from "./nar/nar";
import {Slider} from "./slider/slider";
import {MainWeb} from "./mainweb/mainweb";
import {GridView} from "./gridview/gridview";
import {Database} from "./database/database";
import {FormWeb} from "./formweb/formweb";
import {StudentsService} from "./model/students.service";


@NgModule({
  declarations: [
    AppComponent,
    Nar,
    Slider,
    MainWeb,
    GridView,
    Database,
    FormWeb
    
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent ]
})
export class AppModule {
}
