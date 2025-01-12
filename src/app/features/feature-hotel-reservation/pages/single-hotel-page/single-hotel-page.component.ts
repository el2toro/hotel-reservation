import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelReservationService } from '../../services/hotel-reservation.service';

@Component({
  selector: 'app-single-hotel-page',
  templateUrl: './single-hotel-page.component.html',
  styleUrls: ['./single-hotel-page.component.scss']
})
export class SingleHotelPageComponent implements OnInit {

  hotelId = 0;

  constructor(private activatedRoute: ActivatedRoute, 
    private hotelReservationService: HotelReservationService) { }


  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.params["id"];

    this.hotelReservationService.getHotelById(this.hotelId).subscribe({
      next: (hotel) => console.log(hotel)
    })
  }
}
