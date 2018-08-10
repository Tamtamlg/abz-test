import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../intrfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post('http://504080.com/api/v1/account/login', user)
      .pipe(
        tap((response) => {
          localStorage.setItem('auth-token', response.data.token);
          this.setToken(response.data.token);
        })
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
