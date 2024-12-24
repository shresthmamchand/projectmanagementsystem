import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === this.email && user.password === this.password
    );
  
    if (user) {
      
      localStorage.setItem('loggedInUser', JSON.stringify(user)); 
      this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
