import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.page';
import { ComponentPage } from './component/component.page';
import { AuthenticateService } from './authenticate.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'component',
    loadChildren: () =>
      import('./component/component.module').then((m) => m.ComponentPageModule),
      canActivate:[AuthenticateService]
  },
  {
    path: 'databinding',
    loadChildren: () =>
      import('./databinding/databinding.module').then(
        (m) => m.DatabindingPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
