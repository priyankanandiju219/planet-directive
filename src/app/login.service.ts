import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class LoginService {
  url ="https://reqres.in/api/login";
  tokenSubject = new BehaviorSubject<any>(null);
  token$: Observable<string> = this.tokenSubject.asObservable();

  constructor(private http:HttpClient) {
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
        }
      })
    );
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  }
