import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  exports:[
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BlogFormulariosModule { }
