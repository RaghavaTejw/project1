import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialComponent } from './material/material.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'LoginPage',component:LoginComponent
  },
  {
    path:'DashBoardPage',component:DashboardComponent
  },
  {
    path:'MaterialDemo',component:MaterialComponent
  },
  {
    path:'Register',component:RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 {
    
 }
