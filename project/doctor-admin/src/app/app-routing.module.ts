import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AppointmentComponent  } from "./appointment/appointment.component";
import { SpecialistComponent } from "./specialist/specialist.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientComponent } from "./patient/patient.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReportComponent } from "./report/report.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SettingComponent } from "./setting/setting.component";
import { TransactionsComponent } from "./transactions/transactions.component";



const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'specialist', component: SpecialistComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'errormessage', component: ErrorMessageComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'report', component: ReportComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'transaction', component: TransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
