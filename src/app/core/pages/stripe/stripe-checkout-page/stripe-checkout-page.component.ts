import { Component, OnInit } from '@angular/core';
import { StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { environment } from "../../../../../environments/environment"
import { switchMap } from 'rxjs';
import { CheckoutService } from '../../../services/checkout.service';
import { CheckoutModel } from '../../../models/checkout.model';
import { CheckoutResponseModel } from '../../../models/checkout-response.model';

@Component({
  selector: 'app-stripe-checkout-page',
  templateUrl: './stripe-checkout-page.component.html',
  styleUrls: ['./stripe-checkout-page.component.scss']
})
 
export class StripeCheckoutPageComponent implements OnInit {

  constructor(private checkoutService: CheckoutService,
    private stripeFactory: StripeFactoryService) { }

    public stripe!: StripeInstance;

    isLoading: boolean = false;

  
  ngOnInit() {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
  }

  checkOut(){
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
}
