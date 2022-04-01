import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdfComponent } from './components/mdf/mdf.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/:student_id', component: StudentsComponent},
  {path: 'students/:student_id/:name', component: StudentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'mdf', component: MdfComponent},
  {path: '**', component: NotfoundComponent} //any page that does not exist, will go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
