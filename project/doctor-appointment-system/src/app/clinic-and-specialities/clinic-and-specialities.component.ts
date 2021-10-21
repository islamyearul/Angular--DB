import { Component, OnInit } from '@angular/core';
import { DoctorsService } from "../doctors.service";

@Component({
  selector: 'app-clinic-and-specialities',
  templateUrl: './clinic-and-specialities.component.html',
  styleUrls: ['./clinic-and-specialities.component.css']
})
export class ClinicAndSpecialitiesComponent implements OnInit {

  clinics: any[]=[];
  error = '';


  constructor(private clinicService: DoctorsService) { }

  ngOnInit(): void {
    return this.gerClinicInfo();
  }

  gerClinicInfo(){
    this.clinicService.getClinicsSpc().subscribe(
      (data:any)=> { this.clinics = data},
      (err) =>{
       console.log(err);
       this.error  = err;
      }
          
    )
  }

}

function err(err: any) {
  throw new Error('Function not implemented.');
}
