import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginAuthenticationService } from '../login-authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  user: string = '';
  pass: string = '';

  userNameCreds = ['Ken', 'admin', 'user'];
  passwordCreds = ['2002', '123', '1345'];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authenticate: LoginAuthenticationService,
    private toast: ToastController,
    private data: DataService
  ) {}

  ngOnInit() {
    console.log();
  }

  async login() {
    for (let start = 0; start < this.userNameCreds.length; start++) {
      if (
        this.user == this.userNameCreds[start] &&
        this.pass == this.passwordCreds[start]
      ) {
        this.authenticate.authenticate = true;
        localStorage.setItem('username', this.user);
      }
    }
    this.authenticate
      .validateLoad()
      .then(() => {
        this.loginSuccess();
        this.router.navigate(['dashboard/home']);
      })
      .catch(() => {
        this.loginFailed();
      });
  }

  async loginSuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Welcome!',
      message: 'Welcome, ' + this.user,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async loginFailed() {
    const toast = await this.toast.create({
      message: 'Login Failed',
      duration: 1000,
    });
    toast.present();
  }
}
