// Modules injection
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  CarouselModule,
  InputsModule,
  WavesModule,
  ButtonsModule
} from 'angular-bootstrap-md';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Inject components, services etc..
import { AppComponent } from './app.component';
import * as fromPages from './pages';
import * as fromServices from './services';
import * as fromComponents from './components';
// import * as fromPipes from './pipes';
// import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    AppComponent,
    ...fromPages.pages,
    ...fromComponents.components,
    // ...fromPipes.pipes,
    // ...fromDirectives.directives,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ButtonsModule,
    CarouselModule,
    WavesModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    TabsModule.forRoot(),
    MnFullpageModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHPjwO7A_ZCfsBeFIXkWTt26c8HJCNGQ0'
    })
  ],
  providers: [
    ...fromServices.services,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
