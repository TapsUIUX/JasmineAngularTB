import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComponent } from './dummy.component';

describe('Component : DummyComponent', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let eventEl : HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEl = fixture.nativeElement.querySelector('#ee');
    component.num=0;
  });

  it('test 1 : componet created', () => {
    expect(component).toBeTruthy();
  });

  it(`test 2 : should recieve the input`,()=>{ 
    component.num=0;
    fixture.detectChanges();
    expect(component.num).toBe(0);
  })

  it(`test 3 : onclick should emit event`,()=>{
    let result:number;
    component.num_e.subscribe(num=>{result=num});
    eventEl.click(); //click need to be after subscribe
    fixture.detectChanges();
    expect(result).toBe(0);
  })

});
