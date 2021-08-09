import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPokemon } from '../services/poke';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  animations: [
    //Will trigger whenever you change the state of your component
    trigger("fade", [
      // trigger when component goes from void/nonexisting to existing
      transition("void => *", [ //Transition will change the style of the DOM whenever a component changes its state (non existing to existing)
        style({opacity:0}), //Css style in the function
        animate(500, style({opacity:1})) // timer, css style in the function
      ])
    ]),
    
    trigger("move", [
      transition("void => *", [
        animate(200, style({transform: "translateX(5%)"})),
        animate(200, style({transform: "translateX(0)"}))
      ])
    ]) 
  ]
})
export class PokemonComponent implements OnInit {

  currentPokemon:IPokemon = 
  { 
    name : "",
    id : 0,
    base_experience : 0,
    sprites : []
  };

  pokeGroup = new FormGroup(
    {
      id: new FormControl(), //validation can be added inside ()
      name: new FormControl(),
    }
  );
  
  //dependency pokiApi
  constructor(private pokiApi:PokeapiService) { }

  ngOnInit(): void {
    this.currentPokemon.name = "No Pokemon has been selected";
  }

  getPikachu()
  {
    this.pokiApi.getPikachu().subscribe(
      (response) => {     
        this.currentPokemon.name = response.name;
        this.currentPokemon.id = response.id;
        this.currentPokemon.sprites = response.sprites;
        this.currentPokemon.base_experience = response.base_experience;
        console.log(this.currentPokemon); 
        }
    );
  }

  getPokemon(pokeGroup:FormGroup)
  {
    if(pokeGroup.get("id")?.value)
    {
      this.pokiApi.getPokemon(pokeGroup.get("id")?.value).subscribe(
        (response) => {     
          this.currentPokemon.name = response.name;
          this.currentPokemon.id = response.id;
          this.currentPokemon.sprites = response.sprites;
          this.currentPokemon.base_experience = response.base_experience;
          console.log(this.currentPokemon); 
          }
      )
    }
  }
}
