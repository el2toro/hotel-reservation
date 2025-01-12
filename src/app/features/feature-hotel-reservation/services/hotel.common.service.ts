import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class HotelCommonService{
    getHotelRating(rating: number): number[]{
        let stars = [];
        for(let i = 0; i < rating; i++){
          stars.push(i);
        } 
        return stars;
    }
}