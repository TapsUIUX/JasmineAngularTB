import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() submit_e:EventEmitter<User> = new EventEmitter<User>();

  constructor(private _fb : FormBuilder) { }

  loginForm = this._fb.group({
    userName:[],
    pw:[]
  })

  onSubmit = ()=>{
    this.submit_e.emit(this.loginForm.value);
  }
  ngOnInit() {
  }

}

export interface User {
  userName:string;
  pw:string;
}