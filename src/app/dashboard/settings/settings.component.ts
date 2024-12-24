import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  showChangePassword = false;
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  passwordError = '';
  showUpdateProfile: boolean = false;
  showNotificationPreferences: boolean = false;
  showTaskReminders: any;

  constructor(private authService: AuthService, private router: Router) {}

  toggleChangePassword() {
    this.showChangePassword = !this.showChangePassword;
    this.passwordError = '';
  }

  onChangePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = 'New password and confirmation do not match.';
      return;
    }

    this.authService
      .changePassword(this.currentPassword, this.newPassword)
      .subscribe(
        (response) => {
          alert('Password changed successfully! Please log in with your new password.');
          this.router.navigate(['/login']); 
        },
        (error) => {
          this.passwordError = error.error.message || 'Failed to change password. Please try again.';
        }
      );
  }
  toggleUpdateProfile() {
    this.showUpdateProfile = !this.showUpdateProfile;
    this.showNotificationPreferences = false;
    this.showTaskReminders = false;
  }

  toggleNotificationPreferences() {
    this.showNotificationPreferences = !this.showNotificationPreferences;
    this.showUpdateProfile = false;
    this.showTaskReminders = false;
  }

  toggleTaskReminders() {
    this.showTaskReminders = !this.showTaskReminders;
    this.showUpdateProfile = false;
    this.showNotificationPreferences = false;
  }
  
}
