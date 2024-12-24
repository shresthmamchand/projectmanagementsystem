import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { LeavesComponent } from './dashboard/leave/leave.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CompanyPolicyComponent } from './dashboard/company-policy/company-policy.component';
import { MyCalendarComponent } from './dashboard/my-calendar/my-calendar.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TasksComponent,
    LeavesComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    CompanyPolicyComponent,
    MyCalendarComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
