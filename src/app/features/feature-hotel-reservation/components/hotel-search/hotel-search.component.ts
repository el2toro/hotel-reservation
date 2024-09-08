import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

class HotelSearchModel{
  whereToGo = '';
  checkIn = null;
  checkOut = null;
  rooms = null;
  guests = null;
}

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})


export class HotelSearchComponent implements OnInit {
  form: any;
  searchModel = new HotelSearchModel();

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions = new Observable<string[]>();

  constructor(private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();

    this.filteredOptions = this.form.value['where'].valueChanges.pipe(
      startWith(''),
      //map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

   this.router.navigate(['/hotel-list'])
  }
}


