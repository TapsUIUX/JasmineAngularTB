import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent ,User} from './login-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';
 

describe('Component : LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  // let userNameEl:HTMLElement;
  // let pwEl:HTMLElement;

  let userNameEl:DebugElement;
  let pwEl:DebugElement;

  let submitEl:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports:[ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userNameEl = fixture.debugElement.query(By.css('#userName'));
    pwEl = fixture.debugElement.query(By.css('#pw'));
    submitEl= fixture.nativeElement.querySelector("#formSubmit") as HTMLElement;
  });

  it('test 1 : component created', () => {
    expect(component).toBeTruthy();
  });

  it('test 2 : should emit the event on submit',()=>{
    // console.log(userNameEl)
    // userNameEl.nativeElement.value='taps';
    // pwEl.nativeElement.value='pw';
    component.loginForm.setValue({userName:"taps",pw:"pw"}) // best no confusion
    let result:User;
    component.submit_e.subscribe(user=>{result = user; console.log(result)});
    submitEl.click();
    expect(result.userName).toBe('taps');
    expect(result.pw).toBe('pw');

  })


});
