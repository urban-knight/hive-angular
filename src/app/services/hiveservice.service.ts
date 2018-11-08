import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HiveService } from '@app/models/hiveservice.model';

@Injectable()
export class HiveServiceService {

    constructor(private _http: Http) { }

    getHiveServices(lang: string) {
        let url = `${window.location.protocol}//${window.location.hostname}`;
        if (window.location.port) {
            url += `${window.location.port === '4200' ? ':3000' : ':' + window.location.port}`;
        }
        url += `/api/services?lang=${lang || 'en'}`;
        return this._http.get(url)
            .map((response: Response) => response.json().services.map(i => new HiveService(i)))
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
