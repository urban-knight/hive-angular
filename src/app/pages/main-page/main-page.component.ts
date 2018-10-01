import { Component, Output, Input, ViewChild } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  public initSectionColor: string;

  @ViewChild('navbar')
  private navbar: NavbarComponent;

  @Output()
  public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true,
    onLeave: (index: number, nextIndex: number, direction: string): void => {
      let navbarColor = '';

      if (nextIndex % 2 === 0) {
        navbarColor = this.initSectionColor === 'dark' ? 'dark' : 'light';
      } else {
        navbarColor = this.initSectionColor === 'dark' ? 'light' : 'dark';
      }
      this.navbar.setColor(navbarColor);
    }
  });

  constructor(public fullpageService: MnFullpageService) {
    this.initSectionColor = 'dark';
  }

  @Input() public opts: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 100,
    menu: '.menu',
    css3: true,
    anchors: [
      'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
      'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
    ]
  });

}
