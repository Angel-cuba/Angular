import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  title: string = 'Hola soy el titulo del body';
  constructor() { }

  ngOnInit(): void {
  }

}
