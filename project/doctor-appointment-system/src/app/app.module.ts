import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ClinicAndSpecialitiesComponent } from './clinic-and-specialities/clinic-and-specialities.component';
import { PopularComponent } from './popular/popular.component';
import { AvailableFeatureComponent } from './available-feature/available-feature.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmaintComponent } from './appointmaint/appointmaint.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ClinicAndSpecialitiesComponent,
    PopularComponent,
    AvailableFeatureComponent,
    HomeComponent,
    AdminComponent,
    ContactUsComponent,
    AboutUsComponent,
    AppointmaintComponent,
    DoctorRegistrationComponent,
    LoginSignupComponent,
    DoctorsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
