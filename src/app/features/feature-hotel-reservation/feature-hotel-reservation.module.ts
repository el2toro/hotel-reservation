import { NgModule } from "@angular/core";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FeatureHotelReservationRoutingModule } from "./feature-hotel-reservation-routing.module";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { WhyChoseSectionComponent } from "./components/why-chose-section/why-chose-section.component";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    WhyChoseSectionComponent
  ],
  imports: [
    FeatureHotelReservationRoutingModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  exports: []
})
export class FeatureHotelReservationModule { }