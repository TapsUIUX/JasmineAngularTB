import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { CamelCasePipe } from './camel-case.pipe';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    LoginFormComponent,
    CamelCasePipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
