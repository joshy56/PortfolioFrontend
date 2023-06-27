import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogModule,
  MatDialogRef,
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
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
})
export class LoginDialog implements OnInit {
  public authService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  hidePassword: boolean = true;
  form!: FormGroup;

  constructor(private dialogRef: MatDialogRef<LoginDialog>) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public hidden(): boolean {
    return this.hidePassword;
  }

  public switchHide(): void {
    this.hidePassword = !this.hidePassword;
  }

  public onSubmit(): void {
    let username = this.form.get('username')?.value;
    let password = this.form.get('password')?.value;
    if (typeof username === 'string' && typeof password === 'string') {
      this.authService
        .login({ username, password })
        .subscribe(() => this.dialogRef.close());
    }
  }
}
