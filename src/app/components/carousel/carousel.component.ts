import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data;
  project: string;
  entity: any[];

  constructor() { }

  ngOnInit() {
    this.entity = Array(4);
  }
}


