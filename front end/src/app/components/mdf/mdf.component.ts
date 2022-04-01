import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  studentForm;

  constructor(private formBuilder:FormBuilder) { 
    this.studentForm = formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        age: [],
        gender: ['female'],
        password: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.studentForm.value); //gives everything user types into input

    this.studentForm.reset(); //clears all data in form

  }

  //getter method

  get nameFormControl(){
    return this.studentForm.get('name')!;
  }

  get emailFormControl(){
    return this.studentForm.get('email')!;
  }

  get ageFormControl(){
    return this.studentForm.get('age')!;
  }
}
