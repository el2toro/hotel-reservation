import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/models/user.model";

@Injectable({providedIn: 'root'})

export class AuthService{
 private baseUrl = 'https://localhost:7092/api/Auth/';

  constructor(private httpClient: HttpClient){}

  public login(user: UserModel) : Observable<UserModel>{
   return this.httpClient.post<UserModel>(this.baseUrl + 'Login', user);
  }
}