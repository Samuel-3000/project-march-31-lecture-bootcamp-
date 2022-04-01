import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Istudent } from '../interface/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

    getStudents(){
      return this.http.get<Istudent[]>('http://localhost:3000');
    

  }
}
