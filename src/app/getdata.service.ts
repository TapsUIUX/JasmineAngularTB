import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _http:HttpClient) { }

  posts:Array<Post>;
  getPosts=()=>{
  return  this._http.get('https://jsonplaceholder.typicode.com/posts');   
  }
}

export interface Post {
  userId:number;
  id:number;
  title:string;
  body:string;
}
