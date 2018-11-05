import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  private color: string;
  private lastColor: string;
  isOpen: boolean;

  constructor() {
    this.color = 'light';
   }

  setColor(c) {
    this.color = c;
  }
  setClasses() {
    const classes = {
      light: this.color === 'light',
      dark: this.color === 'dark',
      open: this.isOpen
    };
    return classes;
  }
  toggle() {
    if (this.isOpen) {
      this.color = this.lastColor;
    } else {
      this.lastColor = this.color;
      this.color = 'light';
    }
    this.isOpen = !this.isOpen;
  }
}
