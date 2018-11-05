// Modules injection
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  APP_INITIALIZER
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
import { TranslateModule, TranslateService } from '@ngstack/translate';
import { AppRoutingModule } from './app.routing';

// Inject components, services etc..
import { AppComponent } from './app.component';
import * as fromPages from './pages';
import * as fromServices from './services';
import * as fromComponents from './components';
// import * as fromPipes from './pipes';
// import * as fromDirectives from './directives';

// needed to load translation before application starts
export function setupTranslateService(service: TranslateService) {
  return () => service.load();
}

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
      apiKey: 'AIzaSyAwbc49s90FxUmXbOwDmMs-mLGLdB_UIis'
    }),
    TranslateModule.forRoot({
      translationRoot: 'assets/i18n',
      translatePaths: [
        'assets/i18n/navbar/',
        'assets/i18n/main/'
      ],
      debugMode: false,
      supportedLangs: ['en', 'ru', 'uk']
    }),
    AppRoutingModule
  ],
  providers: [
    ...fromServices.services,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateService,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
