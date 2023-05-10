import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenService: TokenService = inject(TokenService);

  constructor() {}

  logged(): boolean {
    return this.tokenService.getToken() !== null;
  }

  login(username: string, password: string) {
    this.tokenService.storeToken(`user/${username}, password/${password}`);
  }

  logout() {
    this.tokenService.clearToken();
  }
}
