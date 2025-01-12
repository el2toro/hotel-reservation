import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { HotelReservationService } from '../../services/hotel-reservation.service';
import { HotelSearchModel } from 'src/app/models/hotel-search.mode';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})

export class HotelSearchComponent implements OnInit {
  form: any;
  searchModel = new HotelSearchModel();

  options: string[] = [];
  filteredOptions = new Observable<string>();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private hotelReservationService: HotelReservationService
  ) { }

  ngOnInit() {
    this.createForm();
    this.initOptions();
  }

  private initOptions(){
    // this.hotelReservationService.getDestinations(this.searchModel).subscribe({
    //     next: (destinations) => {
    //       this.options = destinations.map((destination: any) => destination.city)
  
    //       this.filteredOptions = this.form.get(['where']).valueChanges.pipe(
    //         startWith(''),
    //         map((value: any) => this._filter(value || ''))
    //       );
    //     }
    //    })
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

  createForm(){
    this.form = this.formBuilder.group({
      where: [null],
      checkIn: [null],
      checkOut: [null],
      rooms: [null],
      guests: [null]
  });

  this.form.valueChanges.subscribe({
   next: () => {
     this.searchModel.whereToGo = this.form.value['where'];
     this.searchModel.checkIn = this.form.value['checkIn'];
     this.searchModel.checkOut = this.form.value['checkOut'];
     this.searchModel.rooms = this.form.value['rooms'];
     this.searchModel.guests = this.form.value['guests'];
   }
  })
 }

 searchHotel() {
   console.log(this.searchModel)

  //  this.hotelReservationService.getDestinations(this.searchModel).subscribe({
  //   next: (destinations) => destinations.map((destination: any) => this.options.push(destination.country))
  //  })

   this.router.navigate(['/hotel-list'])
  }

  searchForDestination(){
    // this.hotelReservationService.getDestinations(this.searchModel).subscribe({
    //   next: (destinations) => this.options = destinations.map((destination: any) =>  destination.city)
    //  })
  } 

  searchDestination(){
    // console.log('is searching')
    // this.hotelReservationService.getDestinations(this.searchModel).subscribe({
    //   next: (destinations) => {
    //     this.options = destinations.map((destination: any) => destination.city)

    //     console.log(this.options)
    //   }
    //  })
  }
}


