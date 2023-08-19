import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class Players
{
  name:string="";
  runs:number=0;
  city:string="";
  image:string="";
}

export class TestService {

  constructor() { }
  players:Players[]=[
    {
      name:"Virat kohli",
      runs:27000,
      city:"Delhi",
      image:"../assets/Virat.jpg"
    },
    {
      name:"M.S. Dhoni",
      runs:20000,
      city:"Ranchi",
      image:"../assets/dhoni.jpg"
    },
    {
      name:"Suryakumar yadav",
      runs:10000,
      city:"Mumbai",
      image:'../assets/Surya.jpg'
    },
    {
      name:"Ambati rayudu",
      runs:20000,
      city:"Guntur",
      image:"../assets/rayudu.jpg"
    }
  
  ];
  getPlayers(){
    return this.players;
  }
}
