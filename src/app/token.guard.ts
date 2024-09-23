import { CanActivateFn } from '@angular/router';

export const tokenGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) return true;
  alert('You must enter a token before proceeding.');
  return false;
};
