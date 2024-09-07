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
import { PropertyHighlightsComponent } from "./components/single-hotel-page-components/property-highlights/property-highlights.component";
import { AvailabilityComponent } from "./components/single-hotel-page-components/availability/availability.component";
import { OverviewComponent } from "./components/single-hotel-page-components/overview/overview.component";
import { HotelAmenitiesComponent } from "./components/single-hotel-page-components/hotel-amenities/hotel-amenities.component";
import { LocationComponent } from "./components/single-hotel-page-components/location/location.component";
import { ReviewComponent } from "./components/single-hotel-page-components/review/review.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FrequentlyAskedQuestionComponent } from "./components/single-hotel-page-components/frequently-asked-question/frequently-asked-question.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { OtherNearPropertiesComponent } from "./components/single-hotel-page-components/other-near-properties/other-near-properties.component";
import { KeepUpdatedComponent } from "./components/single-hotel-page-components/keep-updated/keep-updated.component";
import { HotelListPageComponent } from "./pages/hotel-list-page/hotel-list-page.component";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { TourPageComponent } from "./pages/tour-page/tour-page.component";

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
    ImagesSectionComponent,
    PropertyHighlightsComponent,
    AvailabilityComponent,
    OverviewComponent,
    HotelAmenitiesComponent,
    LocationComponent,
    ReviewComponent,
    FrequentlyAskedQuestionComponent,
    OtherNearPropertiesComponent,
    KeepUpdatedComponent,
    HotelListPageComponent,
    AboutPageComponent,
    TourPageComponent,
    BlogPageComponent,
    ContactPageComponent
  ],
  imports: [
    FeatureHotelReservationRoutingModule,
    MatIconModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  exports: []
})
export class FeatureHotelReservationModule { }