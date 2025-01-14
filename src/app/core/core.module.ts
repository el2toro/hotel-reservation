import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StripeCheckoutPageComponent } from "./pages/stripe/stripe-checkout-page/stripe-checkout-page.component";
import { StripeSuccessPageComponent } from "./pages/stripe/stripe-success-page/stripe-success-page.component";
import { StripeCancelPageComponent } from "./pages/stripe/stripe-cancel-page/stripe-cancel-page.component";
import { CoreRoutingModule } from "./core.routing.module";


@NgModule({
  declarations: [
    ShellComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    StripeCheckoutPageComponent,
    StripeSuccessPageComponent,
    StripeCancelPageComponent
  ],
  imports: [
    CoreRoutingModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }