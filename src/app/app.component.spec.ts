import { TestBed, async, ComponentFixture } from '@angular/core/testing';
//import {By} from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { PostsComponent } from './posts/posts.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CamelCasePipe } from './camel-case.pipe';
import { HttpClientModule , HttpClient} from '@angular/common/http';
 


//import { DebugElement } from '@angular/core';

describe('Componet : AppComponent', () => {

  // Declare the stuffs you need
 
 let fixture : ComponentFixture<AppComponent>;
 let component: AppComponent;
 let incEl:HTMLElement;
 let decEl:HTMLElement;
   
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,DummyComponent,LoginFormComponent,PostsComponent,CamelCasePipe
      ],imports:[ReactiveFormsModule,HttpClientModule],
      providers:[HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    incEl = fixture.nativeElement.querySelector("#inc");
    decEl = fixture.nativeElement.querySelector('#dec');
    
  }));

  it(' test 1 : component created', () => {
    expect(component).toBeTruthy();
  });

  it(' test 2 : number should increment on btn click',()=>{
    //default intial value of num is 0
    incEl.click();
    expect(component.num).toBe(1);
  });

  it(' test 3 : number should decrement on btn click',()=>{
    //default intial value of num is 0
    decEl.click();
    expect(component.num).toBe(-1);
  });

  it('test 4 : the dummComp event collector function should assign values',()=>{
    let event = 20;
    component.eventCollector(event);
    expect(component.eventNum).toBe(20);
  });

  it('test 5 : the from event collector function should assign values',()=>{
    let event = {userName:"taps",pw:"pw"};
    component.formEvent(event);
    expect(component.userName).toBe('taps');
    expect(component.pw).toBe('pw');
  })




});
