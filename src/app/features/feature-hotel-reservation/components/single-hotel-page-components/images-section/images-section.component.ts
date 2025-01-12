import { Component, inject, Input, OnInit } from '@angular/core';
import { HotelModel } from 'src/app/models/hotel.model';
import { HotelCommonService } from '../../../services/hotel.common.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingConfirmationDialogComponent } from '../../booking-confirmation-dialog/booking-confirmation-dialog.component';

@Component({
  selector: 'app-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.scss']
})
export class ImagesSectionComponent implements OnInit {
 @Input() hotel = new HotelModel;

  constructor(private hotelCommonService: HotelCommonService, public dialog: MatDialog) { }

  ngOnInit() {

  }

  reserveNow() {
    this.dialog.open(BookingConfirmationDialogComponent, {
      data: this.hotel
    })
  }

  getHotelRating(rating: number): number[]{
    return this.hotelCommonService.getHotelRating(rating);
  }
}
