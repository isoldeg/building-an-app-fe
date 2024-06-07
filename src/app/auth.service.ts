import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    localStorage.setItem('token', 'dummy_token');
  }

   logout(): void {
    localStorage.removeItem('token');
   }
}
