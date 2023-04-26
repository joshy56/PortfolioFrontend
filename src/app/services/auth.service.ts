import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenService: TokenService = inject(TokenService);

  constructor() {}

  login(username: string, password: string) {}

  logout() {
    this.tokenService.clearToken();
  }
}
