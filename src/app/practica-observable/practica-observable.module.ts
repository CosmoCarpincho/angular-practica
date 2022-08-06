import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, NgModel, FormsModule } from "@angular/forms";
import { Componente1Component } from './componente1/componente1.component';



@NgModule({
  declarations: [
    Componente1Component
  ],
  exports:[
    Componente1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticaObservableModule { }

