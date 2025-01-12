import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomModel } from 'src/app/models/room.model';
import { HotelReservationService } from '../../../services/hotel-reservation.service';
import { AmenityModel } from 'src/app/models/amenity.model';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
rooms = <RoomModel[]>[];
amenities = <AmenityModel[]>[];

hotelId = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private hotelReservationService: HotelReservationService
  ) { }

  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.params["id"];
    this.getRooms();
    this.getAmenities();
  }

  getRooms(){
    this.hotelReservationService.getRooms(this.hotelId).subscribe({
      next: (rooms) => this.rooms = rooms,
      error: (error) => console.log(error)
    })
  }

  getAmenities(){
    this.hotelReservationService.getAmenities(this.hotelId).subscribe({
      next: (amenities) => this.amenities = amenities,
      error: (error) => console.log(error)
    })
  }
}
