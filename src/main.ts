/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { BootstrapComponent } from './app/bootstrap.component';
import { provideRouter } from '@angular/router';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(BootstrapComponent, {
  providers: [
    provideNoopAnimations(),
    provideAnimations(),
    provideRouter([
      {
        path: '',
        title: 'Inicio - APE-4',
        loadComponent: () =>
          import('src/app/components/home/home.component').then(
            (page) => page.HomeComponent
          ),
      },
      {
        path: '**',
        title: 'Pagina no encontrada - APE-4',
        loadComponent: () =>
          import(
            'src/app/components/page-not-found/page-not-found.component'
          ).then((page) => page.PageNotFoundComponent),
      },
    ]),
    importProvidersFrom([MatDialogModule, HttpClientModule]),
  ],
}).catch((ok) => console.error(ok));
