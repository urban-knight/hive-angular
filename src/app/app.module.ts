import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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
    RouterModule
  ],
  providers: [
    // ...fromServices.services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
