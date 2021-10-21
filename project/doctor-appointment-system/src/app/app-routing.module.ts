import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AdminComponent } from "./admin/admin.component";
import { AppointmaintComponent } from "./appointmaint/appointmaint.component";
import { DoctorRegistrationComponent } from "./doctor-registration/doctor-registration.component";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { DoctorsComponent } from "./doctors/doctors.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'appointmaint', component: AppointmaintComponent},
  {path: 'doctror-registration', component: DoctorRegistrationComponent},
  {path: 'login-signup', component: LoginSignupComponent},
  {path: 'doctors', component: DoctorsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
