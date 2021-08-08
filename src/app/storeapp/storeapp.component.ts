import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreappService } from '../services/storeapp.service';
import { ICustomer } from '../services/storefront';

@Component({
  selector: 'app-storeapp',
  templateUrl: './storeapp.component.html',
  styleUrls: ['./storeapp.component.css']
})
export class StoreappComponent implements OnInit {
  customers: ICustomer[] | undefined

  custGroup = new FormGroup(
    {
      fname: new FormControl,
      lname: new FormControl,
      address: new FormControl,
      phone: new FormControl
    }
  );

  constructor(private saApi: StoreappService) { }

  ngOnInit(): void {
    this.saApi.getAllCustomers().subscribe(
      (response) => {
        this.customers = response;
      }
    );
  }

}
