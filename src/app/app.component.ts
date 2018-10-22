import { Component } from '@angular/core';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  num:number = 0;
  eventNum:number;
  users:object;
  userName:string;
  pw:string;
  inc = ()=>{this.num++};
  dec = ()=> {this.num--};
  
  eventCollector =(event)=>{
    this.eventNum = event
  }

  formEvent=(event)=>{
   this.users=event;
   this.userName=this.users['userName']|| '-';
   this.pw=this.users['pw'] || '*'
  }



 constructor( ){}

}
