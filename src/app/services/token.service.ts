import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  storeToken(token: string): void {
    this.clearToken();
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  clearToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }
}
