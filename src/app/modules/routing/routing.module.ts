import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*  {
    path: '',
    title: 'Inicio - APE-4',
    loadComponent: () =>
      import('src/app/components/home/home.component').then(
        (page) => page.HomeComponent
      ),
  }, */
  {
    path: '**',
    title: 'Pagina no encontrada - APE-4',
    loadComponent: () =>
      import('src/app/components/page-not-found/page-not-found.component').then(
        (page) => page.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
