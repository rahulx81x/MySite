import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'about',component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'work',component:WorkComponent},
  {path:'others',component:OthersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
