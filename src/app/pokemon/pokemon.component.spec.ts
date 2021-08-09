import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { PokeapiService } from '../services/pokeapi.service';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let pokiService: PokeapiService;

  class MockService
  {
    //empty implementation because we're not testing if api working but testing if component working
    getPikachu(){};
    getPokemon(){};
  }

  const dummyPokeData =
  {
    name: "pikachu",
    id: 25,
    base_experience:100,
    sprites: []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      providers: [{provide: PokeapiService, useClass: MockService}] //provider has to be an object with 2 properties
    })
    .compileComponents();

    pokiService = TestBed.inject(PokeapiService);
  });

  beforeEach(() => {
    // fixture variable mimics the lifecycle hook of a component - meaning we have to manually call on the life cycle hooks of a component
    // TestBed.createComponent() function will create the welcome component in our testing environment and have fixture be attached to that particular component
    fixture = TestBed.createComponent(PokemonComponent); 

    //component variable will point to the welcome that we just created
    component = fixture.componentInstance;
    
    //This is the manual way of telling the component to do the ngOnChange() method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("p#test should have 'No Pokemon has been selected' when the component is first created", 
    () =>
    {
      //this will grab the paragraph tag in the pokemon.component.html
      let paragraph:HTMLElement = fixture.debugElement.query(By.css('p#test')).nativeElement; // query by CSS selector
      //this will check that the paragraph tag will have "No Pokemon has been selected"
      expect(paragraph.innerHTML).toBe("No Pokemon has been selected");
    }
  );

  it("p#test should have 'pikachu' when the component get the pokemon 'pikachu'", 
    () =>
    {
      //this will grab the paragraph tag in the pokemon.component.html
      let paragraph:HTMLElement = fixture.debugElement.query(By.css('p#test')).nativeElement; // query by CSS selector
      //set the currentPokemon.name to "pikachu"
      component.currentPokemon.name = "pikachu";
      //need this life cycle hooks to detect change
      fixture.detectChanges();
      //this will check that the paragraph tag will have "No Pokemon has been selected"
      expect(paragraph.innerHTML).toBe("pikachu");
    }
  );

  it("it should fetch getPikachu async data",
    waitForAsync(() =>
    {
      //Will guarantee to give an observable response of the dummy data we created
      spyOn(pokiService, "getPikachu").and.returnValue(new Observable((observable) => {
        observable.next(dummyPokeData);
      }));

      let button:HTMLElement = fixture.debugElement.query(By.css('#btn1')).nativeElement;
      button.click();
      fixture.detectChanges();

      let paragraph:HTMLElement = fixture.debugElement.query(By.css('p#test')).nativeElement;
      //Life cycle hooks: When all the event are done and finished
      fixture.whenStable().then(
        () =>
        {
          expect(paragraph.innerHTML).toBe("pikachu");
        }
      )
    })
  );

});
