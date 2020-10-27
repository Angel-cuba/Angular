import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  inicio: string = 'INICIO DE ESTE TRABAJO';

  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
