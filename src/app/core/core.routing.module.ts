import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StripePaymentComponent } from "src/app/core/stripe-payment/stripe-payment.component";
import { StripeSuccessPageComponent } from "src/app/core/pages/stripe/stripe-success-page/stripe-success-page.component";
import { StripeCancelPageComponent } from "src/app/core/pages/stripe/stripe-cancel-page/stripe-cancel-page.component";


const routes: Routes = [
  { path: 'checkout', component: StripePaymentComponent },
  { path: 'checkout/success', component: StripeSuccessPageComponent },
  { path: 'checkout/cancel', component: StripeCancelPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoreRoutingModule { }