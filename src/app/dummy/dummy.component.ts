import { Component, OnInit,Input,Output,EventEmitter,AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit  {

  @Input() num:number;
  @Output() num_e = new EventEmitter<number>();

  displayNum:number;

  constructor() { }

  ngOnInit() {
    this.displayNum=this.num 
  }

  // ngAfterViewInit(){
  //   console.log(this.num)// dont assign value here, used contentInit instead of it  
  // }

  emitEvent=()=>{
    this.num_e.emit(this.num * 10);
  }

  
}
