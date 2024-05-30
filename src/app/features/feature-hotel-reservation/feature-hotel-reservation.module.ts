import { NgModule } from "@angular/core";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FeatureHotelReservationRoutingModule } from "./feature-hotel-reservation-routing.module";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { WhyChoseSectionComponent } from "./components/why-chose-section/why-chose-section.component";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { TopDestinationsComponent } from "./components/top-destinations/top-destinations.component";
import { NearHotelsSectionComponent } from "./components/near-hotels-section/near-hotels-section.component";
import { LatestFromBlogSectionComponent } from "./components/latest-from-blog-section/latest-from-blog-section.component";
import { MarketingSectionComponent } from "./components/marketing-section/marketing-section.component";
import { SubscribeSectionComponent } from "./components/subscribe-section/subscribe-section.component";
import { CustomerReviewSectionComponent } from "./components/customer-review-section/customer-review-section.component";
import { HotelSearchComponent } from "./components/hotel-search/hotel-search.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SingleHotelPageComponent } from "./pages/single-hotel-page/single-hotel-page.component";
import { ImagesSectionComponent } from "./components/single-hotel-page-components/images-section/images-section.component";


@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    WhyChoseSectionComponent,
    TopDestinationsComponent,
    NearHotelsSectionComponent,
    LatestFromBlogSectionComponent,
    MarketingSectionComponent,
    SubscribeSectionComponent,
    CustomerReviewSectionComponent,
    HotelSearchComponent,
    SingleHotelPageComponent,
    ImagesSectionComponent
  ],
  imports: [
    FeatureHotelReservationRoutingModule,
    MatIconModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  exports: []
})
export class FeatureHotelReservationModule { }