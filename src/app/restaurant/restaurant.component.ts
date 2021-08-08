import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IRestaurant } from '../services/restaurant';
import { RrapiService } from '../services/rrapi.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

//OnChanges life cycle hooks stuff
export class RestaurantComponent implements OnInit, OnChanges {

  restaurants: IRestaurant[] | undefined;
  restGroup = new FormGroup(
    {
      name: new FormControl,
      city: new FormControl,
      state: new FormControl,
    }
  );

  constructor(private RRApi:RrapiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.getAllRestaurant();
  }

  getAllRestaurant()
  {
    this.RRApi.getAllRestaurant().subscribe(
      (respone) => 
      {
        this.restaurants = respone;
      }
      );
  }

  addRestaurant(p_restGroup: FormGroup)
  {
    let tempRest:IRestaurant =
    {
      name:this.restGroup.get("name")?.value,
      city:this.restGroup.get("city")?.value,
      state:this.restGroup.get("state")?.value,
      revenue:0
    }

    this.RRApi.addRestaurant(tempRest).subscribe(
      (response) =>
      {
        console.log(response);

        this.getAllRestaurant();
      }
    );
  }
}
