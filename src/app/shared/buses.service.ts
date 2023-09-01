import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BusesService {
  url:string='/assets/datafile.json'
  constructor(private _HttpClient:HttpClient) { }

  getData(){
    return this._HttpClient.get(this.url)
  }
}
