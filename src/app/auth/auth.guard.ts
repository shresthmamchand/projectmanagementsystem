import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      alert('You must log in to access this page.');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
