import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelModel } from 'src/app/models/hotel.model';
import { HotelReservationService } from '../../services/hotel-reservation.service';
import { BookingModel } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking-confirmation-dialog',
  templateUrl: './booking-confirmation-dialog.component.html',
  styleUrls: ['./booking-confirmation-dialog.component.scss']
})
export class BookingConfirmationDialogComponent implements OnInit {
  roomPrice = 0;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { hotel: HotelModel, roomId: number},
  private dialogRef: MatDialogRef<BookingConfirmationDialogComponent>,
  private hotelReservationService: HotelReservationService) { }

  ngOnInit() {
    this.getReservationPrice();
  }

  close(){
    this.dialogRef.close();
  }

  confirm(){
    let booking = new BookingModel;
    booking.checkInDate = '2025/01/15';
    booking.checkOutDate = '2025/01/20';
    booking.roomId = this.data.roomId;
    booking.totalAmount = this.roomPrice;
    booking.guestId = 1;
    booking.bookingStatus = 'Pending';

    this.hotelReservationService.bookRoom(booking).subscribe({
      next: () => console.log('Room booked successfuly!'),
      error: (error) => console.log(error)
    })
  }

  getReservationPrice(){
    this.hotelReservationService.getReservationPrice(this.data.roomId).subscribe({
      next: (roomPrice) => this.roomPrice = roomPrice,
      error: (error) => console.log(error)
    })
  }
}
