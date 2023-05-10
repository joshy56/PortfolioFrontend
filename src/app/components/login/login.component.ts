import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public authService: AuthService = inject(AuthService);

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog
      .open(LoginDialog, {})
      .afterOpened()
      .subscribe((data) => console.log('open login dialog'));
  }

  showLoginDialog(): void {
    this.openDialog();
  }
}

@Component({
  selector: 'login-dialog',
  standalone: true,
  templateUrl: './login-dialog.html',
  imports: [
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class LoginDialog {
  public authService: AuthService = inject(AuthService);

  hidePassword: boolean = true;

  public hidden(): boolean {
    return this.hidePassword;
  }

  public switchHide(): void {
    this.hidePassword = !this.hidePassword;
  }
}
