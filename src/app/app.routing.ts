import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
