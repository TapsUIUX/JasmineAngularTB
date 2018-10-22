 



import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import { GetdataService,Post } from './getdata.service';



 
describe('Service : GetdataService', () => {

  let service: GetdataService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule,HttpClientModule],
      providers: [
        GetdataService,
        MockBackend,
        HttpClient,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
        // Get the MockBackend
        backend = TestBed.get(MockBackend);
        // Returns a service with the MockBackend so we can test with dummy responses
        service = TestBed.get(GetdataService);
    
      });

  it('test 1 : should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test 2 : should return the post items',fakeAsync(()=>{
    let response : Array<Post>= [ {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }];

    //When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    service.getPosts();
    tick();//which blocks execution and waits for all the pending promises to be resolved.
 
  }))
});
