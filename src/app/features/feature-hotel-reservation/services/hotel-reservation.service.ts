import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HotelSearchModel } from "src/app/models/hotel-search.mode";

@Injectable({providedIn: 'root'})

export class HotelReservationService{
 private baseUrl = 'https://localhost:7092/HotelReservation/';

  constructor(private httpClient: HttpClient){}

  // public getDestinations(searchModel: HotelSearchModel) : Observable<any>{
  //  return this.httpClient.post<any>(this.baseUrl + 'GetDestinations', searchModel);
  // }

  public getAllHotels() : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'GetAll');
  }

  public getHotelById(hotelId: number) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'GetById', {params: {hotelId}});
  }
}