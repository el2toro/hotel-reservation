import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AmenityModel } from "src/app/models/amenity.model";
import { HotelSearchModel } from "src/app/models/hotel-search.mode";
import { HotelModel } from "src/app/models/hotel.model";
import { RoomModel } from "src/app/models/room.model";

@Injectable({providedIn: 'root'})

export class HotelReservationService{
 private baseUrl = 'https://localhost:7092/HotelReservation/';

  constructor(private httpClient: HttpClient){}

  // public getDestinations(searchModel: HotelSearchModel) : Observable<any>{
  //  return this.httpClient.post<any>(this.baseUrl + 'GetDestinations', searchModel);
  // }

  public getAllHotels() : Observable<HotelModel[]>{
    return this.httpClient.get<HotelModel[]>(this.baseUrl + 'GetAll');
  }

  public getHotelById(hotelId: number) : Observable<HotelModel>{
    return this.httpClient.get<HotelModel>(this.baseUrl + 'GetById', { params: { hotelId }});
  }

  public getRooms(hotelId: number) : Observable<RoomModel[]>{
    return this.httpClient.get<RoomModel[]>(this.baseUrl + 'GetRooms', { params: { hotelId }});
  }

  public getAmenities(hotelId: number) : Observable<AmenityModel[]>{
    return this.httpClient.get<AmenityModel[]>(this.baseUrl + 'GetAmenities', { params: { hotelId }});
  }

  public getReservationPrice(hotelId: number) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'GetReservationPrice', { params: { hotelId }});
  }
}