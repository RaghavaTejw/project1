import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  background:string="../assets/th.jpg";

  constructor(private router:Router){

  }
  Login(){
    this.router.navigate(['/LoginPage']);
  }
  DashBoard(){
    this.router.navigate(['/DashBoardPage']);
  }
  MaterialDemo(){
    this.router.navigate(['/MaterialDemo']);
  }
  Register(){
    this.router.navigate(['/Register']);
  }
}
