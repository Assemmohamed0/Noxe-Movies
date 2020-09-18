import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AlltrendingService {

  constructor(public _HttpClient:HttpClient) 
  { 

  }


  getTrinding(searchName):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${searchName}/day?api_key=b511c848c7a8cfd19d775aedd2f652f1`)
  }




}
