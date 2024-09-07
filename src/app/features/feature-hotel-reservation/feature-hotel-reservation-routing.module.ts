import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SingleHotelPageComponent } from "./pages/single-hotel-page/single-hotel-page.component";
import { HotelListPageComponent } from "./pages/hotel-list-page/hotel-list-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { TourPageComponent } from "./pages/tour-page/tour-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'room', component: SingleHotelPageComponent },
  { path: 'hotel-list', component: HotelListPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'tours', component: TourPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureHotelReservationRoutingModule { }