import {
  Component,
  OnInit,
  Output,
  Input,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TitleService } from '@ngstack/translate';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { FpSection } from '@app/models/fp-section.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public sections: FpSection[];

  constructor(
    public fullpageService: MnFullpageService,
    private _route: ActivatedRoute,
    private _translate: TranslateService,
    private _titleService: TitleService
  ) {
    this.initSectionColor = 'dark';
    this.sections = new Array<FpSection>();
    this.sections.push(
      new FpSection('intro', 'dark', 'app-main-section'),
      new FpSection('about', 'light', 'app-about-us'),
      new FpSection('services', 'dark', 'app-tabs'),
      new FpSection('products', 'light', 'app-product-carousel'),
      new FpSection('portfolio', 'dark', 'app-carousel'),
      new FpSection('order', 'light', 'app-main-cta'),
      new FpSection('contacts', 'dark', 'app-footer')
    );
  }

  public lang: string;
  public initSectionColor: string;
  @ViewChild('navbar') private navbar: NavbarComponent;

  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    lockAnchors: true,
    keyboardScrolling: true,
    onLeave: (index: number, nextIndex: number, direction: string): void => {
      const section: FpSection = this.sections[nextIndex - 1];
      this.navbar.setColor(section.color === 'dark' ? 'light' : 'dark');
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}#${section.dataAnchor}`
      );
    }
  });

  @Input() public opts: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 100,
    menu: '.menu',
    lockAnchors: true,
    css3: true
  });

  ngOnInit() {
    this._route.data.subscribe(d => {
      this._translate.activeLang = d.lang;
      this.navbar.setActiveLang(d.lang);
      this._titleService.setTitle('main.title');
    });
    this.opts.anchors = this.sections.map(s => s.dataAnchor);
  }

  ngOnDestroy(): void {
    this.fullpageService.destroy('all');
  }

  navigate(anchor: string) {
    this.fullpageService.moveTo(anchor);
  }
}
