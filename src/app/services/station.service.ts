import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private apiUrl = 'https://location-poc-uwkg.onrender.com/api/service-stations';


  constructor(private http: HttpClient) {}

  getAllStations(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  findNearestStation(coords: { latitude: number; longitude: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/nearest`, coords);
  }
}
