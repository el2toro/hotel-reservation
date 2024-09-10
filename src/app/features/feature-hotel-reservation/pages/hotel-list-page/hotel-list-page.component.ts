import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

interface Hotel {
  id: number,
  name: string;
  location: string;
  price: string;
  charges: string;
  image: string;
}

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss']
})

export class HotelListPageComponent implements OnInit {
  totalItems = 0;
  pageSize = 10;
  currentPage = 0;
  totalPages = 0;
  pageItems = <Hotel[]>[];
  totalPageList: number[] = [];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  hotelList: Hotel[] = [] 
  panelOpenState = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.initHotelList();

    this.totalItems = this.hotelList.length;
    this.totalPages = this.totalItems / this.pageSize;

    this.getPageData(this.currentPage);
    this.createPageList();
  }

  createPageList(){
    for(let item = 0; item < this.totalPages; item++){
      this.totalPageList.push(item);
    }
  }

  getButtonContent(pageNumber: number, arrayLenght: number): string{

    if(arrayLenght === 5){
      return pageNumber.toString();
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

    this.pageItems = this.hotelList.slice(startIndex, endIndex);
    console.log( this.pageItems)
    this.scrollToTop();
    return this.pageItems;
  }

  previousPage(){
    if(this.currentPage === 0){ return; }
    this.pageItems = this.getPageData(this.currentPage -1);
    this.scrollToTop();
  }

  nextPage(){
    if(this.currentPage >= this.totalPages){ return; }
    this.pageItems = this.getPageData(this.currentPage + 1);
    this.scrollToTop();
  }

  scrollToTop(){
    window.scrollTo(0, 550)
  }

  choseRooms(){
    this.router.navigate(['/room'])
  }

  private initHotelList(){
    this.hotelList = [
      {
        id: 1,
        name: 'My hotel',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 2,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 3,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 4,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 5,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 6,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 7,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 8,
        name: 'The Great Hotel',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 9,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 10,
        name: 'The Wonderful Hotel',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 11,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 12,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 13,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 14,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 15,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 16,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 17,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 18,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 19,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 20,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 21,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 22,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 23,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 24,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 25,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 26,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 27,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 28,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 29,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 30,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 31,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 32,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 33,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 34,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 35,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 36,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 37,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 38,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 39,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 40,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 41,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 42,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 43,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 44,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 45,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 46,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 47,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 48,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 49,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 50,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 51,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 52,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 53,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 54,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 55,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 56,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 57,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 58,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 59,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 60,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 61,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 62,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 63,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 64,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 65,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 66,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 67,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 68,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 69,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 70,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 71,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 72,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 73,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 74,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 75,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 76,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
      {
        id: 77,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-1.jpg'
      },
      {
        id: 78,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-2.jpg'
      },
      {
        id: 79,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-3.jpg'
      },
      {
        id: 80,
        name: 'The Hotel name goes here',
        location: '3730 Las Vegas Boulevard South, Las Vegas, NV, US',
        price: '860USD',
        charges: '+100',
        image: 'assets/images/hotel-4.jpg'
      },
    ]
  }
}
