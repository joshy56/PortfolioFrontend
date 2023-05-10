import { inject } from '@angular/core';
import { CanActivateFn, NavigationCancel, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const functionalAuthGuard: CanActivateFn = (route, snapshot) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.getToken() === null) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
