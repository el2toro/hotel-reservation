import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModel } from 'src/app/models/room.model';
import { HotelReservationService } from '../../../services/hotel-reservation.service';
import { AmenityModel } from 'src/app/models/amenity.model';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  @Output() setRoom: EventEmitter<any> = new EventEmitter;

  rooms = <RoomModel[]>[];
  amenities = <AmenityModel[]>[];
  hotelId = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private hotelReservationService: HotelReservationService,
    private router: Router
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

  chooseRoom(roomId: number) {
    this.setRoom.emit(roomId);
    this.scrollToTop();
  }

  scrollToTop(){
    window.scrollTo(0, 340)
  }
}
