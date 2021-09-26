import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employe-dashboard',
  templateUrl: './employe-dashboard.component.html',
  styleUrls: ['./employe-dashboard.component.css']
})
export class EmployeDashboardComponent implements OnInit {
  formValue !: FormGroup;
  constructor(private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      firstname : [''],
      lastname : [''],
      mobile : [''],
      email : [''],
      salary : ['']

    })
  }

}
