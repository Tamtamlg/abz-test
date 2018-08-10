import { Contact } from './../intrfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<any> {
    return this.http.get('http://504080.com/api/v1/directories/enquiry-types');
  }

  send(contact: Contact): Observable<any> {
    return this.http.post('http://504080.com/api/v1/support', contact);
  }

}
