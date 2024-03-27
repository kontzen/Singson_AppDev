import { Component } from '@angular/core';
import { DataService } from '../data.service';import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from '../login-authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  blueArchive: any;

  constructor(private api: DataService, private alertController: AlertController, private router: Router, private authenticate:LoginAuthenticationService) {}

  ngOnInit(): void {
    this.api.getHttp().subscribe((response) => {
      this.blueArchive = response.data;
      console.log(this.blueArchive);
    });
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
