import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticaObservableModule } from './practica-observable/practica-observable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PracticaObservableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

