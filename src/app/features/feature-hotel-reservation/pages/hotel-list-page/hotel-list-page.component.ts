import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelReservationService } from '../../services/hotel-reservation.service';
import { HotelModel } from 'src/app/models/hotel.model';
import { HotelCommonService } from '../../services/hotel.common.service';
import { HotelSearchModel } from 'src/app/models/hotel-search.mode';

interface Food {
  value: string;
  viewValue: string;
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
  hotelList = <HotelModel[]>[];
  totalPageList: number[] = [];
  hotelSearchModel = new HotelSearchModel;
  isLoading = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  panelOpenState = false;
  
  constructor(private router: Router, 
    private hotelReservationService: HotelReservationService, 
    private hotelCommonService: HotelCommonService) { }

  ngOnInit() {

  }

  createPageList(){
    for(let item = 0; item < this.totalPages; item++){
      this.totalPageList.push(item);
    }
  }

  getAllHotels(searchModel: HotelSearchModel){
    this.hotelSearchModel = searchModel;
    this.isLoading = true;
    this.hotelReservationService.getAllHotels(searchModel).subscribe({
      next: (hotelList: HotelModel[]) => {
        this.hotelList = hotelList;
        this.totalItems = this.hotelList.length;
        this.totalPages = this.totalItems / this.pageSize;

        this.getPageData(this.currentPage);
        this.createPageList();
        this.isLoading = false;
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
    return this.hotelCommonService.getHotelRating(rating);
  }
}
