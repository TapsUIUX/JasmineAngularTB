import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { GetdataService} from '../getdata.service';
import {HttpClient ,HttpHandler} from "@angular/common/http";

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let testBedService:GetdataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers:[GetdataService,HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(GetdataService);
    fixture.detectChanges();
  });

  it('test 1 : should create', () => {
    expect(component).toBeTruthy();
  });

  it('test 2 : test injection testBed and Injected service must be same', () => {
    inject([GetdataService], (injectService: GetdataService) => {
      expect(injectService).toBe(testBedService);
    })
  });
});
