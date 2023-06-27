import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';
import { JwtDto } from '../models/jwtdto/jwtdto';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user/userdto';

const USER_NAME = 'AuthUserName';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://portfoliobackend-zk6w.onrender.com/auth/';
  private tokenService: TokenService = inject(TokenService);
  private http: HttpClient = inject(HttpClient);

  logged(): boolean {
    return this.tokenService.getToken() !== null;
  }

  register(dto: JwtDto): Observable<any> {
    return this.http.post<any>(this.authUrl + 'register', dto);
  }

  login(dto: UserDto): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.authUrl + 'login', dto).pipe(
      tap((response) => this.tokenService.storeToken(response.token)),
      tap((response) =>
        window.sessionStorage.setItem(USER_NAME, response.username)
      )
    );
  }

  logout() {
    this.tokenService.clearToken();
    window.sessionStorage.removeItem(USER_NAME);
  }
}
