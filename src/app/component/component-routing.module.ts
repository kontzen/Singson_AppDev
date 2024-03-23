import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPage } from './component.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPage,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'component',
        component: ComponentPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentPageRoutingModule {}
