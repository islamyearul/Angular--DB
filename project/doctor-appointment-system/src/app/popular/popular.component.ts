import { Component, OnInit } from '@angular/core';
import { DoctorsService } from "../doctors.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  doctrs: any[]=[];
  error = '';

  constructor(private docservice: DoctorsService) { }

  ngOnInit(): void {
    this.gerDoctorsInfo()
  }

  gerDoctorsInfo(){
    this.docservice.getDocs().subscribe(
      (data:any)=> { this.doctrs = data},
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
