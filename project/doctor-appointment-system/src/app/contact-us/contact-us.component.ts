import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  title ="crud";
  mydata:any[]=[];
  constructor(private crudService: CrudService) {}
  myPost(data:NgForm){
    console.log(data);
    this.crudService.store(data).subscribe()
  }

}
