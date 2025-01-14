import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CheckoutModel } from "src/app/core/models/checkout.model";

@Injectable({providedIn: 'root'})

export class CheckoutService{
 private baseUrl = 'https://localhost:7092/Checkout/';

  constructor(private httpClient: HttpClient){}

  public createCheckoutSession(checkout: CheckoutModel) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + 'CreateCheckoutSession', checkout);
  }
}