import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
//import { ActivedRoutes, Params} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  servicio:any[] = [];

  constructor(private service: MyServiceService) {
    this.servicio= service.obtenerServicio();
   }

  ngOnInit(): void {
  }

}
