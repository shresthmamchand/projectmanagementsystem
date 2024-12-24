import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSignup(): void {
    
    if (!this.name || !this.email || !this.phone || !this.password) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user: any) => user.email === this.email);

    if (existingUser) {
      this.errorMessage = 'User already exists with this email!';
    } else {
      users.push({ name: this.name, email: this.email, phone: this.phone, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful! Please login.');
      this.router.navigate(['/login']); 
    }
  }
}
