import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDetailsService {
  planetDetails: any = [];
  apiUrl = 'https://swapi.info/api/planets/all.json?format=json';
  constructor(private http: HttpClient) { }

  getDataList(pageNumber?: any , pageSize? : any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  
}
