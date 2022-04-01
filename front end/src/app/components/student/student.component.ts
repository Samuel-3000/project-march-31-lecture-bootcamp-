import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Istudent } from 'src/app/interface/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {


  @Input() student!:Istudent;
  @Output() deleteEvent = new EventEmitter();


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("student component initialized")
  }

  onDelete() {

    //this line of code triggers event and sends along record of student

    this.deleteEvent.emit(this.student);
  }
}
