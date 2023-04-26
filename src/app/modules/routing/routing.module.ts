import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from 'src/app/components/edit/edit.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

import { functionalAuthGuard } from 'src/app/guards/functional-authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'APE-4',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Inicio Sesion - APE-4',
    component: LoginComponent,
  },
  {
    path: 'edit',
    title: 'Edicion - APE-4',
    canActivate: [functionalAuthGuard],
    component: EditComponent,
  },
  {
    path: '**',
    title: 'Pagina No Encontrada - APE-4',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
