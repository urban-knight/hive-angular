import { Component, Output, Input} from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @Output()
  public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true
  });

  constructor(public fullpageService: MnFullpageService) {
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
