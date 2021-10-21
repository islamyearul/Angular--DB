import { Component, OnInit } from '@angular/core';
import { DoctorsService } from "../doctors.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  whatS: any[]=[];
  service: any[]=[];
  error = '';
  constructor(private whatsDoweDo: DoctorsService) { }

  ngOnInit(): void {
    this.whatsDoweDo.getwhats().subscribe(
      (data: any)=> {this.whatS = data},
      (err)=> {
        console.log(err);
        this.error = err;
      }
    )

    this.whatsDoweDo.getservice().subscribe(
      (data: any)=> {this.service = data},
      (err)=> {
        console.log(err);
        this.error = err;
      }
    )
    // return this.getWhats()
    // return this.getService()
  }
  // getWhats(){
  //   this.whatsDoweDo.getwhats().subscribe(
  //     (data: any)=> {this.whatS = data},
  //     (err)=> {
  //       console.log(err);
  //       this.error = err;
  //     }
  //   )
  // }

//  } 

  // getService(){
  //   this.whatsDoweDo.getservice().subscribe(
  //     (data: any)=> {this.whatS = data},
  //     (err)=> {
  //       console.log(err);
  //       this.error = err;
  //     }
  //   )
  // }

}
function err(err: any) {
  throw new Error('Function not implemented.');
}