import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor(private http: HttpClient) { }


  getbeerList(sortfeild) {
    let url = `https://api.openbrewerydb.org/breweries`;
    if (sortfeild) {
      url += `?sort=${sortfeild}`;
    }
    return this.http.get(url);
  }

  getbreweryById(id) {
    const url = `https://api.openbrewerydb.org/breweries/${id}`;
    return this.http.get(url);
  }


}
