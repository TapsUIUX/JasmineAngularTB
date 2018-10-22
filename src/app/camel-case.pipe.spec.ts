import { CamelCasePipe } from './camel-case.pipe';
import { Pipe, PipeTransform } from '@angular/core';

describe('Pipe : CamelCasePipe', () => {

  let pipe :  CamelCasePipe;

  beforeEach(()=>{
    pipe = new CamelCasePipe();
  })
  it('test 1 : Pipe instance created', () => {
    expect(pipe).toBeTruthy();
  });

  it('test 2 : it should transform input string to camel case',()=>{
    let value:string = "hello";
    expect(pipe.transform(value)).toBe("Hello");
  })
});
