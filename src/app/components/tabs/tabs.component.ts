import { Component, OnInit } from '@angular/core';
import { HiveServiceService } from '@app/services/hiveservice.service';
import { HiveService } from '@app/models/hiveservice.model';
import { TranslateService } from '@ngstack/translate';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(
    private _hiveServiceService: HiveServiceService,
    private _translate: TranslateService
  ) { }

  services: HiveService[];

  ngOnInit() {
    this._hiveServiceService.getHiveServices(this._translate.activeLang)
      .subscribe((s: HiveService[]) => this.services = s);
  }
}
