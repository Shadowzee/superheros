import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DialpadserviceService {

  constructor(private http: HttpClient) { }
  addHero (hero){
    return this.http.post('http://localhost:8000/api/cats', hero);
      
  }
}
