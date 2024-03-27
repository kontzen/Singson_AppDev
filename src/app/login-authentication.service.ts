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

  validateLoad() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.authenticate) {
          resolve('');
        } else {
          reject();
        }
      }, 1000);
    });
  }
}
