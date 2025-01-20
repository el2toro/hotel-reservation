import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSignalService {
  private data: any;

  setData(update: any) {
    this.data = update;
  }

  getData(){
    return this.data;
  }
}