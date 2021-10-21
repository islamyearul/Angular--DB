import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CrudService } from "../service/speciality.service";

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {
  title ="crud";
  mydata:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  myPost(data:NgForm){
    console.log(data);
    //this.add.store(data).subscribe()
  }
}
