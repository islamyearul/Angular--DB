import { Injectable } from '@angular/core';
import { Persons } from './persons';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  PHP_API_SERVER = "http://localhost/fahmida-ng-php-mysql/api";
  constructor(private httpClient: HttpClient) {}
  
  readPersons(): Observable<Persons[]>{
    return this.httpClient.get<Persons[]>(`${this.PHP_API_SERVER}/person_list.php`);
  }
  createPerson(person: Persons): Observable<Persons>{
    return this.httpClient.post<Persons>(`${this.PHP_API_SERVER}/create_person.php`, person);
  }
  updatePerson(person: Persons){
    return this.httpClient.put<Persons>(`${this.PHP_API_SERVER}/update_person.php`, person);
  }
  deletePerson(id: number){
    return this.httpClient.delete<Persons>(`${this.PHP_API_SERVER}/delete_person.php/?id=${id}`);
  }
}
