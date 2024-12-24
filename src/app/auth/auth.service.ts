import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  http: any;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const userData = localStorage.getItem(email);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.password === password) {
        this.isLoggedIn = true;
        localStorage.setItem('authToken', 'true'); 
        return true;
      }
    }
    return false;
  }

  signup(userDetails: { name: string; email: string; phone: string; password: string }): void {
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    alert('Signup successful! Please login.');
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post('/api/change-password', {
      currentPassword,
      newPassword,
    });
  }
}
