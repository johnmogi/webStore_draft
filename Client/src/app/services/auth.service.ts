import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const port = 3000

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api = `http://localhost:${port}/api/auth/`;

  constructor(private http: HttpClient) { }

  public login(info: object): Observable<any> {
    return this.http.post<any>(this.api + 'login', info)
  }
  public register(info: object): Observable<any> {
    return this.http.post<any>(this.api, info)
  }

}

