import { Component, OnInit } from '@angular/core';
import { DoctorsService } from "../doctors.service";

@Component({
  selector: 'app-available-feature',
  templateUrl: './available-feature.component.html',
  styleUrls: ['./available-feature.component.css']
})
export class AvailableFeatureComponent implements OnInit {
  
  features: any[]=[];
  error = '';

  constructor(private featureservice: DoctorsService) { }

  ngOnInit(): void {
    return this.getavfeatures()
  }

  getavfeatures(){
    this.featureservice.getFeatures().subscribe(
      (data:any)=> {this.features = data},
      (err)=> {
        console.log(err);
        this.error = err;
      }
    )
  }

}

function err(err: any) {
  throw new Error('Function not implemented.');
}
