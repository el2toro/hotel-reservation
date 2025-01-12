import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelReservationService } from '../../services/hotel-reservation.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface Hotel {
  hotelId: number,
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isAvailable: boolean;
  rating: number;
  image: string;
  location: Location;
}

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss']
})

export class HotelListPageComponent implements OnInit {
  totalItems = 0;
  pageSize = 5;
  currentPage = 0;
  totalPages = 0;
  hotelList = <Hotel[]>[];
  totalPageList: number[] = [];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  panelOpenState = false;
  
  constructor(private router: Router, 
    private hotelReservationService: HotelReservationService) { }

  ngOnInit() {
    this.getAllHotels();
  }

  createPageList(){
    for(let item = 0; item < this.totalPages; item++){
      this.totalPageList.push(item);
    }
  }

  getAllHotels(){
    this.hotelReservationService.getAllHotels().subscribe({
      next: (hotelList: Hotel[]) => {
        this.hotelList = hotelList;
        this.totalItems = this.hotelList.length;
        this.totalPages = this.totalItems / this.pageSize;

        this.getPageData(this.currentPage);
        this.createPageList();
      },
      error: (error) => console.log(error)
    })
  }

  getButtonContent(pageNumber: number, arrayLenght: number): string{

    if(arrayLenght < 5){
      return (pageNumber + 1).toString();
    }

    pageNumber = pageNumber + 1;

    switch(pageNumber){
      case arrayLenght - 1:
        return '...';
       case arrayLenght:
        return arrayLenght.toString();
      default:
        return pageNumber.toString();   
    }
  }

  getPageData(pageIndex: number){
    this.currentPage = pageIndex;
    const startIndex = pageIndex * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.hotelList.length);

    this.hotelList = this.hotelList.slice(startIndex, endIndex);
    console.log( this.hotelList)
    this.scrollToTop();
    return this.hotelList;
  }

  previousPage(){
    if(this.currentPage === 0){ return; }
    this.hotelList = this.getPageData(this.currentPage -1);
    this.scrollToTop();
  }

  nextPage(){
    if(this.currentPage >= this.totalPages){ return; }
    this.hotelList = this.getPageData(this.currentPage + 1);
    this.scrollToTop();
  }

  scrollToTop(){
    window.scrollTo(0, 550)
  }

  choseRooms(hotelId: number){
    this.router.navigate(['/room/' + hotelId])
  }

  getHotelRating(rating: number): number[]{
    console.log(rating)
    let stars = [];
    for(let i = 0; i < rating; i++){
      stars.push(i);
    }

    return stars;
  }
}
