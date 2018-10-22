import { Component, OnInit } from '@angular/core';
import {GetdataService,Post} from '../getdata.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _getData : GetdataService) { }
  posts:any;
  ngOnInit() {

     this._getData.getPosts().subscribe((response)=> {
       this.posts = response  ;
       this.posts = this.posts.slice(0,10);  
    },(error)=>{console.log(error)})
 
 
  }

}
