import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SingleHotelPageComponent } from "./pages/single-hotel-page/single-hotel-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: SingleHotelPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureHotelReservationRoutingModule { }