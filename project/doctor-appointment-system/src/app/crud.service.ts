
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = 'http://localhost/angular/project/doctor-appointment-system/api';
  constructor(private http: HttpClient) { }
  store(mydata: any) {
    return this.http.post(`${this.baseUrl}/post-touch.php`, { data: mydata })
  }
}