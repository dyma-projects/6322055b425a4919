import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exerice3Component } from './exerice3/exerice3.component';
import { Exerice4Component } from './exerice4/exerice4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercice1Component,
    Exerice3Component,
    Exerice4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
