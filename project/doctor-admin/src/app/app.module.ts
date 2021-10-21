import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    AppointmentComponent,
    SpecialistComponent,
    DoctorsComponent,
    PatientComponent,
    ReviewsComponent,
    ReportComponent,
    SettingComponent,
    ProfileComponent,
    ErrorMessageComponent,
    AuthenticationComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
