import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
   

  //ESTE ES EL SEVICIO QUE UTILIZO PARA PODER ENVIAR LA INFO QUE NECESITO
  //EN show.component.html
   servicio:any[] = [
     {
       nombre:'Angel',
       especialidad: 'CSS',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non expedita molestias ea pariatur consequatur necessitatibus, temporibus distinctio dolore dignissimos ad quis nihil autem cum ratione ullam minus omnis dolorem.'
     },
     {
      nombre:'Luis',
      especialidad: 'JAVA',
     info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non expedita molestias ea pariatur consequatur necessitatibus, temporibus distinctio dolore dignissimos ad quis nihil autem cum ratione ullam minus omnis dolorem.'
    },
    {
      nombre:'Vera',
      especialidad: 'Python',
     info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, non expedita molestias ea pariatur consequatur necessitatibus, temporibus distinctio dolore dignissimos ad quis nihil autem cum ratione ullam minus omnis dolorem.'
    }
   ]

  constructor() { 
    console.log('Funcionando mi archivo de servicio')
  }

  //Esta es la función para EXPORTAR EL SERVICIO
  obtenerServicio(){
    return this.servicio;
  }
}
