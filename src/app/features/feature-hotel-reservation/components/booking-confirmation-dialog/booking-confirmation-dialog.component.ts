import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelModel } from 'src/app/models/hotel.model';
import { HotelReservationService } from '../../services/hotel-reservation.service';

@Component({
  selector: 'app-booking-confirmation-dialog',
  templateUrl: './booking-confirmation-dialog.component.html',
  styleUrls: ['./booking-confirmation-dialog.component.scss']
})
export class BookingConfirmationDialogComponent implements OnInit {



  constructor( @Inject(MAT_DIALOG_DATA) public hotel: HotelModel,
  private dialogRef: MatDialogRef<BookingConfirmationDialogComponent>,
  private hotelReservationService: HotelReservationService) { }

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close();
  }

  confirm(){

  }

  getReservationPrice(){
    this.hotelReservationService.getReservationPrice(this.hotel.hotelId).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error)
    })
  }
}
