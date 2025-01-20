import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { HotelReservationService } from '../../services/hotel-reservation.service';
import { HotelSearchModel } from 'src/app/models/hotel-search.mode';
import { LocationModel } from 'src/app/models/location.model';
import { DataSignalService } from '../../services/data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})

export class HotelSearchComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter;

  form: any;
  searchModel = new HotelSearchModel();

  options =<LocationModel[]>[];
  filteredOptions = new Observable<LocationModel[]>();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private hotelReservationService: HotelReservationService,
    private dataSignalService: DataSignalService
  ) { }

  ngOnInit() {
    this.createForm();
    this.initOptions();
  }

  private initOptions(){
    this.hotelReservationService.getLocations().subscribe({
        next: (locations) => {
          this.options = locations.map((locations: LocationModel[]) => this.options = locations)
  
          this.filteredOptions = this.form.get(['where']).valueChanges.pipe(
            startWith(''),
            map((value: any) => this._filter(value || ''))
          );
        }
       })
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.city.toLowerCase().includes(filterValue))
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
     this.searchModel.checkIn = this.dateFormat(this.form.value['checkIn']);
     this.searchModel.checkOut = this.dateFormat(this.form.value['checkOut']);
     this.searchModel.rooms = this.form.value['rooms'];
     this.searchModel.guests = this.form.value['guests'];
   }
  })
 }

 searchHotel() {
   this.dataSignalService.setData(this.searchModel);
   this.search.emit(this.searchModel)
   this.router.navigate(['/hotel-list'])
  }

  dateFormat(date: Date): string{
    return formatDate(date, 'yyyy/MM/dd', 'en-US')
  } 
}


