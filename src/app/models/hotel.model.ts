import { LocationModel } from "./location.model";

export class HotelModel{
    hotelId = 0;
    name = '';
    description = '';
    createdAt = '';
    updatedAt = '';
    isAvailable = '';
    rating = 0;
    image = '';
    location = new LocationModel;
  }