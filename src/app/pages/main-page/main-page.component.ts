import { Component, OnInit, Output, Input, ViewChild, OnDestroy } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TitleService } from '@ngstack/translate';
import { NavbarComponent } from '@app/components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(
    public fullpageService: MnFullpageService,
    private _route: ActivatedRoute,
    private _translate: TranslateService,
    private _titleService: TitleService
  ) {
    this.initSectionColor = 'dark';
  }

    public lang: string;
    public initSectionColor: string;
  @ViewChild('navbar') private navbar: NavbarComponent;

  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
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

  // TODO: Replace anchors to real id's
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

  ngOnInit() {
    this._route.data.subscribe((d) => {
      this._translate.activeLang = d.lang;
      this.navbar.setActiveLang(d.lang);
      this._titleService.setTitle('main.title');
    });
  }

  ngOnDestroy(): void {
    this.fullpageService.destroy('all');
  }
}
