import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from "@angular/forms";
interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}


@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  required:boolean = false;
  register: IRegisterForm = {
    name: '',
    email: '',
    password: '',
    repeatPass: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
