import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SingleHotelPageComponent } from "./pages/single-hotel-page/single-hotel-page.component";
import { HotelListPageComponent } from "./pages/hotel-list-page/hotel-list-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'room', component: SingleHotelPageComponent },
  { path: 'hotel-list', component: HotelListPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureHotelReservationRoutingModule { }