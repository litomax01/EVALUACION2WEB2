import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';

export const AuthGuard: CanActivateFn = () => {
  const dataService = inject(DataService);
  const router = inject(Router);
  if (!dataService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
