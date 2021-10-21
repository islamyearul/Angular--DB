import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm !: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      std_id : [''],
      std_first_name : [''],
      std_last_name : [''],
      std_email : ['']
    })
  }

  onSubmit(){
    console.log(this.addForm.value);
  }

}
