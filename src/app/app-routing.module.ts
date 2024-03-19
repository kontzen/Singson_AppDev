import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPageWithIdPage } from './custom-page/custom-page-with-id/custom-page-with-id';

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
    path: 'custom-page',
    loadChildren: () =>
      import('./custom-page/custom-page.module').then(
        (m) => m.CustomPagePageModule
      ),
  },
  {
    path: 'custom-page/:id',
    component: CustomPageWithIdPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
