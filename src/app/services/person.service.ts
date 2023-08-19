import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People, Person } from '../data/interfaces/person.interface';
import { peopleMethods } from '../data/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private host = environment.apiHost;
  constructor(private http: HttpClient) {}

  getRegisteredPersons(): Observable<People> {
    return this.http.get<People>(this.host + peopleMethods.people);
  }

  registerPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.host + peopleMethods.people, person);
  }
}
