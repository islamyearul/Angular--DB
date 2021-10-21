import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  baseUrl = 'http://localhost/angular/project/doctor-appointment-system/api';
  constructor(private http:HttpClient) { }

  getDocs(){
    return this.http.get(`${this.baseUrl}/doctors.php`)
  }

  getClinicsSpc(){
    return this.http.get(`${this.baseUrl}/clinics.php`);
  }

  getFeatures(){
    return this.http.get(`${this.baseUrl}/available-feature.php`);
  }
  getwhats(){
    return this.http.get(`${this.baseUrl}/what-do-we-do.php`);
  }
  getservice(){
    return this.http.get(`${this.baseUrl}/our-service.php`);
  }

  // getDoc(docId: number){
  //   let params = new HttpParams().set("id", docId);
  //   console.log(params);
  //    return this.http.get(`${this.baseUrl}/district.php`,{params} )
  // }


  Login(data: any){
    return this.http.post<any>("http://localhost/angular/project/doctor-appointment-system/api/login.php", data )
    .pipe(map((res:any)=>{
      return res['data'];
    }));
  }
}
