import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  private color: string;
  private lastColor: string;
  activeLang: string;
  langs: string[];
  isOpen: boolean;

  constructor() {
    this.color = 'light';
  }

  @Output()
  navClick = new EventEmitter<String>();

  nav(event: Event, anchor: string) {
    console.log('child anchor: ' + anchor);
    this.navClick.emit(anchor);
  }

  setColor(c) {
    this.color = c;
  }
  setActiveLang(l) {
    this.activeLang = l;
    const langs = ['en', 'ru', 'uk'];
    const i = langs.indexOf(l);
    if (i > -1) {
      langs.splice(i, 1);
    }
    this.langs = langs;
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
