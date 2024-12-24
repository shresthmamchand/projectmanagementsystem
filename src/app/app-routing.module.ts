import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { LeavesComponent } from './dashboard/leave/leave.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { MyCalendarComponent } from './dashboard/my-calendar/my-calendar.component';
import { CompanyPolicyComponent } from './dashboard/company-policy/company-policy.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'tasks', component: TasksComponent },
      { path: 'leave-apply', component: LeavesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'company-policy', component: CompanyPolicyComponent },
      { path: 'my-calendar', component: MyCalendarComponent },
      { path: 'feedback', component: FeedbackComponent },
    ],
  },
  { path: '**', redirectTo: '/login' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
