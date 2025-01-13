import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelReservationService } from '../../services/hotel-reservation.service';
import { HotelModel } from 'src/app/models/hotel.model';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-single-hotel-page',
  templateUrl: './single-hotel-page.component.html',
  styleUrls: ['./single-hotel-page.component.scss']
})
export class SingleHotelPageComponent implements OnInit {

  hotelId = 0;
  hotel: HotelModel = new HotelModel;
  rooms = <RoomModel[]>[];

  constructor(private activatedRoute: ActivatedRoute, 
    private hotelReservationService: HotelReservationService) { }

  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.params["id"];

    this.getHotelById();
    this.getRooms();
  }

  getHotelById(){
    this.hotelReservationService.getHotelById(this.hotelId).subscribe({
      next: (hotel) => this.hotel = hotel,
      error: (error) => console.log(error)
    })
  }

  getRooms(){
    this.hotelReservationService.getRooms(this.hotelId).subscribe({
      next: (rooms) => {this.rooms = rooms, console.log(this.rooms)},
      error: (error) => console.log(error)
    })
  }
}
