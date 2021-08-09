import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { StoreappComponent } from './storeapp/storeapp.component';

//@NgModule is the decorator that specifies this typescript file is going to be responsible for holding all the dependencies
//Will automatically add new component generated throug cli cmd ng generate component [componentName]
//You would want to generate all new components inside the app folder because it is responsible for creating component and tying them together via app.module.ts
@NgModule({
  declarations: [ //This will hold the reference to other components this application will need
    AppComponent, 
    HeroListComponent,
    PokemonComponent,
    RestaurantComponent,
    StoreappComponent
  ],
  imports: [ //This is where we reference modules that we will need for this project
    BrowserModule,
    FormsModule,
    //Routing, need at least 2 components
    RouterModule.forRoot([
      { path: "superhero", component: HeroListComponent },
      { path: "pokemon", component: PokemonComponent },
      { path: "restaurant", component: RestaurantComponent },
      { path: "customer", component: StoreappComponent }
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [], //This is where you reference services
  bootstrap: [AppComponent] //This is first loaded component/code in the angular application
})
export class AppModule { }
