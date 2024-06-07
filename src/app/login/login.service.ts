import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetails } from './login-details.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendLoginDetails(data: LoginDetails): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/login', data);
  }
}
