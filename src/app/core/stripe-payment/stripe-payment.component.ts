import { Component, OnInit } from '@angular/core';
import { HotelReservationService } from 'src/app/features/feature-hotel-reservation/services/hotel-reservation.service';
import { StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { environment } from "../../../environments/environment"
import { switchMap } from 'rxjs';
import { CheckOutModel } from '../models/checkout.model';

interface IStripeSession {
  id: string;
}

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
 
export class StripePaymentComponent implements OnInit {

  constructor(private hotelReservationService: HotelReservationService,
    private stripeFactory: StripeFactoryService) { }

    public stripe!: StripeInstance;
    public stripeAmount!: number;
    isLoading: boolean = false;

  
  ngOnInit() {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
    this.stripeAmount = 100;
  }

  checkOut(){
    //TODO: use a variaable for model
     this.hotelReservationService.checkOut(this.mapToCheckOutModel())
     .pipe(
      switchMap((response) => {
        console.log(response.sessionId)
        const session: IStripeSession = response as IStripeSession;
        return this.stripe.redirectToCheckout({ sessionId: response.sessionId });
      })
     ).subscribe({
       next: (response) => console.log(response),
       error: (error) => console.log(error)
     })
  }

  mapToCheckOutModel(): CheckOutModel{
   let checkOut = new CheckOutModel();
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
