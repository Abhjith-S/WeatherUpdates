import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { weatherData } from './models/weather.model';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {
  
  constructor(private http: HttpClient) { }
  getContent (location : string): Observable<weatherData>{
    return this.http.get<weatherData>(
      "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=bf0b89712c52d65d5351033913e3d2e0&units=metric"
    );
  }
}
