import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Persons } from '../persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Persons[];
  selectedPerson: Persons = { id : null , name: null, phone: null}

  constructor(private personService: PersonsService) {
    this.personService.readPersons().subscribe((persons: Persons[])=>{
    this.persons = persons;
    console.log(this.persons);
   })
  } 
  ngOnInit() {
    this.PersonsShow()
  }

  PersonsShow(){
    this.personService.readPersons().subscribe((persons: Persons[])=>{
        this.persons = persons;
         console.log(persons);
      })
  } 

}
