import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
 {
   constructor(public tstSvc:TestService)
   {
      
   }
}
    

