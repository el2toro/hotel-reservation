import { Component, OnInit } from '@angular/core';
import { StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { environment } from "../../../../../environments/environment"
import { switchMap } from 'rxjs';
import { CheckoutService } from '../../../services/checkout.service';
import { CheckoutModel } from '../../../models/checkout.model';
import { CheckoutResponseModel } from '../../../models/checkout-response.model';
import { Location } from '@angular/common';
import { HotelSearchModel } from 'src/app/models/hotel-search.mode';
import { DataSignalService } from 'src/app/features/feature-hotel-reservation/services/data.service';

@Component({
  selector: 'app-stripe-checkout-page',
  templateUrl: './stripe-checkout-page.component.html',
  styleUrls: ['./stripe-checkout-page.component.scss']
})
 
export class StripeCheckoutPageComponent implements OnInit {
  public stripe!: StripeInstance;
  isLoading: boolean = false;

  private searchModel!: HotelSearchModel;

  constructor(private checkoutService: CheckoutService,
    private stripeFactory: StripeFactoryService,
    private location: Location,
  private dataService: DataSignalService) { }
  
  ngOnInit() {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
    this.searchModel = this.dataService.getData();

    console.log(this.searchModel)
  }

  checkout(){
    //TODO: use a variaable for model
     this.checkoutService.createCheckoutSession(this.mapToCheckoutModel())
     .pipe(
      switchMap((response: CheckoutResponseModel) => {
        return this.stripe.redirectToCheckout({ sessionId: response.sessionId });
      })
     ).subscribe({
       next: (response) => console.log(response),
       error: (error) => console.log(error)
     })
  }

  mapToCheckoutModel(): CheckoutModel{
   let checkOut = new CheckoutModel();
   checkOut.successUrl = environment.stripe.successUrl;
   checkOut.cancelUrl = environment.stripe.cancelUrl;
   checkOut.amount = 3000;
   checkOut.productName = 'Sky Roket';
   checkOut.productDescription = 'The best hotel ever';
   checkOut.currency = 'EUR';
   checkOut.quantity = 1;

   return checkOut;
  }

  cancel(){
    this.location.back()
  }
}
