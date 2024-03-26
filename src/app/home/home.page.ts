import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginAuthenticationService } from '../login-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private authenticate: LoginAuthenticationService
  ) {}

  async logout() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'You have logged out',
      buttons: ['OK'],
    });
    await alert.present();
    setTimeout(() => {
      this.router.navigate(['login-page']);
      this.authenticate.authenticate = false;
    }, 500); // Considerable delay
  }
}
