import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MnFullpageModule } from 'ngx-fullpage';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import * as fromPages from './pages';
// import * as fromServices from './services';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    AppComponent,
    ...fromPages.pages,
    ...fromComponents.components,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    MnFullpageModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    // ...fromServices.services,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
