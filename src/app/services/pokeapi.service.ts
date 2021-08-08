import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http" //can be found in angular docs
import { Observable } from 'rxjs';
import { IPokemon } from './poke';

//this @Injectable decorator tells angular this application depends on this class
//meaning you dont have to manually specify in the provider in app.module.ts
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private http:HttpClient) { }

  getPikachu() : Observable<IPokemon>
  {
    return this.http.get<IPokemon>(this.url + "pikachu");
  }

  getPokemon(poke: string) : Observable<IPokemon>
  {
    return this.http.get<IPokemon>(this.url + poke);
  }
}
