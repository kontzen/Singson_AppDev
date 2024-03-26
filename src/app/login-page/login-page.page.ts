import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginAuthenticationService } from '../login-authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  user: string = '';
  pass: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authenticate: LoginAuthenticationService,
    private toast: ToastController
  ) {}

  ngOnInit() {
    console.log();
  }

  async login() {
    if (this.pass == '12345') {
      const alert = await this.alertController.create({
        header: 'Success',
        subHeader: 'Welcome!',
        message: 'Welcome, ' + this.user,
        buttons: ['OK'],
      });
      await alert.present();
      setTimeout(() => {
        this.router.navigate(['home']);
        this.authenticate.authenticate = true;
      }, 1000); // Considerable delay
    } else {
      this.loginFailed();
    }
  }

  async loginFailed() {
    const toast = await this.toast.create({
      message: 'Login Failed',
      duration: 1000,
    });
    toast.present();
  }
}
