import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MainPageComponent } from './pages';

const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: MainPageComponent, data: { lang: 'en' },
    children: [
      // { path: 'about', component: AboutPageComponent }
    ]
  },
  {
    path: 'uk',
    component: MainPageComponent, data: { lang: 'uk' },
    children: []
  },
  {
    path: 'ru',
    component: MainPageComponent, data: { lang: 'ru' },
    children: []
  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
