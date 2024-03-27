import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginAuthenticationService } from './login-authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private load: LoginAuthenticationService,
    private http: HttpClient
  ) {}

  getHttp(): Observable<any> {
    return this.http.get<any>(
      'https://api-blue-archive.vercel.app/api/characters'
    );
  }
}
