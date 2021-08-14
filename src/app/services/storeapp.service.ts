import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from './storefront';

@Injectable({
  providedIn: 'root'
})
export class StoreappService {
  private url: string = "https://hieuphanwebapi.azurewebsites.net/api/"

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url + "ManagerPortal/getAllCustomers");
  }
}
