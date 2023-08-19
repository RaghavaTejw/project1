import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    userId:string="";
    password:string="";

   Login(){
    console.log("User Id:",this.userId);
    console.log("Password:",this.password);
    if(this.userId=="raghava"&& this.password=="#2409")
    {
      alert("Correct credentials");
    }
    else{
      alert("Wrong credentials");
    }
   }

   path:string="../assets/login.jpg";
   
}
