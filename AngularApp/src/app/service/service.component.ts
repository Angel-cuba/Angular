import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor( 
    private rutaActiva:ActivatedRoute
    ) {
          this.rutaActiva.params.subscribe(params=>{
            console.log(params['id'])
          })   
     }

  ngOnInit(): void {
  }

}
