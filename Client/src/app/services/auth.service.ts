import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const port  = 3006

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api = `http://localhost:${port}/api/auth/login`;

  constructor(private http: HttpClient) { }

    public login(info:object): Observable<any>{
      return this.http.post<any>(this.api , info)
    }

   }

