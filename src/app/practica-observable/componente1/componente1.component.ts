import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from "rxjs";

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  @Input() num = 0;
  number$ = of(this.num);
  pokemon$ = of("Squirtle", "Charmander", "Bulbasur");
  fruit$ = of(["Frutillas", "Cerezas"], ["Limon","Orange"])
  iceCream$ = of(
    { size: "large", toppings: ["oreos", "Chololate syrup"]},
    { size: "small", toppings: ["Stramberries"]}
  );

  constructor() { }

  ngOnInit(): void {
    let cb = () => this.number$.subscribe(number => console.log(number));
    setTimeout(cb,5000);
    this.pokemon$.subscribe(pokemon => console.log(pokemon));
    this.fruit$.subscribe(fruit => console.log(fruit));
    this.iceCream$.subscribe(iceCream => console.log(iceCream));

  }

  subir(form:NgForm){
    console.log(form.value);
    console.log(form.value.num);


  }

};
