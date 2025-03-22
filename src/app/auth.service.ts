import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/users';


  constructor(private http : HttpClient, private router : Router) { }

  signup(login: string, name: string, password: string) {
    const user = { login, name, password };
    return this.http.post(this.loginUrl, user).pipe(
      catchError((error) => {
        console.error('Error during signup:', error);
        throw error;
      })
    );
  }

  login(username: string, password: string) {
    return this.http.get<any[]>(`${this.loginUrl}?username=${username}&password=${password}`);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
