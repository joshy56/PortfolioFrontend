import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'bootstrap',
  standalone: true,
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    LoginComponent,
  ],
})
export class BootstrapComponent {}
