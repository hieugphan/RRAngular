import { TestBed } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('PokeapiService', () => {
  let service: PokeapiService;
  let httpMock: HttpTestingController; // Mimic HttpClient that poke service uses

  //use the dummy incase api server goes down
  const dummyPokeData = 
  {
    name: "pikachu",
    id: 25
  }

  //inject dependencies here
  beforeEach(() => {
    //TestBed is the application's testing environment to simulate the real angular environment

    // .configureTestingModule() is is similar to @ngModule for the testing environment
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokeapiService
      ]
    }); 
    service = TestBed.inject(PokeapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should have retrieved data from the getPikachu()", 
    () =>
    {
      service.getPikachu().subscribe(
        (response) => 
        {
          expect(response.name).toEqual(dummyPokeData.name);
        }
      );
      //This will check that our service will try to do a single request from the url we provided
      const req = httpMock.expectOne("https://pokeapi.co/api/v2/pokemon/pikachu"); //request
      expect(req.request.method).toBe("GET"); //check if request method is "GET"
      // We are guaranteeing that this url will give this dummyPokeData to our service that is subscribed.
      req.flush(dummyPokeData);  //give response to the request ????????????
    }
  );

});
