import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormulariosModule } from './blog-formularios/blog-formularios.module';
import { PracticaObservableModule } from './practica-observable/practica-observable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PracticaObservableModule,
    BlogFormulariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

