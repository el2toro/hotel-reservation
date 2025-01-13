import { Component, inject, Input, OnInit } from '@angular/core';
import { HotelModel } from 'src/app/models/hotel.model';
import { HotelCommonService } from '../../../services/hotel.common.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingConfirmationDialogComponent } from '../../booking-confirmation-dialog/booking-confirmation-dialog.component';
import { RoomModel } from 'src/app/models/room.model';
import { HotelReservationService } from '../../../services/hotel-reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.scss']
})
export class ImagesSectionComponent implements OnInit {
 @Input() hotel = new HotelModel;
 rooms = <RoomModel[]>[];
 hotelId = 0;

  constructor(private hotelCommonService: HotelCommonService, 
    public dialog: MatDialog,
    private hotelReservationService: HotelReservationService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hotelId = this.activatedRoute.snapshot.params["id"];

    this.getRooms();
  }

  reserveNow() {
    this.dialog.open(BookingConfirmationDialogComponent, {
      data: { hotel: this.hotel, roomId: this.rooms[0].roomId }
    })
  }

  getHotelRating(rating: number): number[]{
    return this.hotelCommonService.getHotelRating(rating);
  }

  getRooms(){
    this.hotelReservationService.getRooms(this.hotelId).subscribe({
      next: (rooms) => {this.rooms = rooms, console.log(this.rooms)},
      error: (error) => console.log(error)
    })
  }
}
