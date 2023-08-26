import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  constructor(public ser:TestService){
    
  }
  displayedColumns: string[] = ['Name', 'Runs', 'City', 'Image'];
  dataSource:any=this.ser.fetchPlayers().subscribe((data)=>{
    this.dataSource=data;
  });
}
