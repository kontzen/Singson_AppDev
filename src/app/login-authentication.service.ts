import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthenticationService {
  authenticate = false;

  constructor() {}

  canActivate() {
    return this.authenticate;
  }
}
