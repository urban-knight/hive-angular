import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  private color: string;

  constructor() {
    this.color = 'light';
   }

  setColor(c) {
    this.color = c;
  }
}
