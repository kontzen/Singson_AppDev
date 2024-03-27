import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginAuthenticationService } from '../login-authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private authenticate: LoginAuthenticationService
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'You have logged out',
      buttons: ['OK'],
    });
    await alert.present();

    localStorage.removeItem('username');
    
    setTimeout(() => {
      this.router.navigate(['login-page']);
      this.authenticate.authenticate = false;
    }, 500); // Considerable delay

    
  }
}
