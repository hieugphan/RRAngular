import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPokemon } from '../services/poke';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
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
