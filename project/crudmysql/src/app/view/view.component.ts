import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../students.service";
// import { Students } from "../students";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  stds: any[]=[];
  error = '';

  constructor(private studentservice: StudentsService) { }

  ngOnInit(): void {
  
  }

  getStudentData(){
    this.studentservice.getStudents().subscribe(
      (data:any)=> { this.stds = data},
      (err)=> {
        console.log(err);
        this.error = err;
      }
    )
  }

}
function err(err:any){
  throw new Error('Function not Emplement');
}
