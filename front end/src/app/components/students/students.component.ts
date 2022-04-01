import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from 'src/app/interface/istudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students!:Istudent[];

  constructor(private route:ActivatedRoute, private studentService:StudentService) { 
  //   route.paramMap.subscribe((params) => {
  //     console.log(params.get('student_id'));
  //     console.log(params.get('name'));
  //   })

  studentService.getStudents().subscribe((results) => {
    this.students = results;
  }, (err) => {
      console.log(err)
  });
  }

  ngOnInit(): void {


    
  }



  //following code will delete student from array:


// deleteStudent(student:Istudent){
//   let arrIndex = this.students.findIndex(s => {
//     return s.name === student.name;
//   });
//   this.students.splice(arrIndex, 1);
// }
}
