import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage implements OnInit {
  username: string = '';
  password: string = '';
  // usrName: 'admin';
  // usrPass: 123;
  constructor(
    private alertCon: AlertController,
    private router: Router,
    private authenticate: AuthenticateService
  ) {}

  ngOnInit() {}

  async login() {
    const alert = await this.alertCon.create({
      header: 'Alert',
      subHeader: 'Login',
      message: 'Sucessfully Login',
      buttons: ['OK'],
    });
    await alert.present();
    this.router.navigate(['component']);
    this.authenticate.authenticate = true;
  }
}
