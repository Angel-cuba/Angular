import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 title: string = 'Variable propia';
 //cursos:string [] = ['HTML','ANGULAR','PHP']

 show:boolean = false;
 animales:Array<any> = [
   {tipo:'Perro', nombre: 'Luna', edad: '13'},
   {tipo:'Gato', nombre: 'Luis', edad: '11'},
   {tipo:'Perico', nombre: 'Maria', edad: '14'},
   {tipo:'Rana', nombre: 'Angel', edad: '4'},
   {tipo:'Ave', nombre: 'Maria', edad: '66'},
   {tipo:'Ardilla', nombre: 'Vera', edad: '4'}

 ]
  constructor() { }

  ngOnInit(): void {
  }

}
