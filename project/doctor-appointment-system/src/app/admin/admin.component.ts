import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DoctorsService } from "../doctors.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm !: FormGroup;
  invalidLogin : boolean = false;
  message: any;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private loginservice: DoctorsService
    ) { } 

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      log_email : [''],
      log_pass : [''],
    })
  }

  onLogin(){

    // this.loginservice.Login(this.loginForm.value);

   console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      return
    }
    const loginData = {
      user: this.loginForm.controls.log_email.value,
      pass: this.loginForm.controls.log_pass.value
    }

    
  this.loginservice.Login(this.loginForm).subscribe(
    (data: any)=> { 
      this.message = data.message;
      if(data.token){
        window.localStorage.setItem('token', data.token);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    
    }
  )

  }


}
