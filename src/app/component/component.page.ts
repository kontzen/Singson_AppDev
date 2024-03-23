import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  constructor(
    private modalCon: ModalController,
    private alertController: AlertController,
    private toast: ToastController
  ) {}

  volume = 100;
  condition = true;

  async toggleModal() {
    const modal = await this.modalCon.create({
      component: ModalComponent,
    });
    return await modal.present();
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Hello World',
      message: 'Hello World',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Hi Philippines',
      duration: 5000,
    });
    toast.present();
  }

  async dismissToast() {
    const toast = await this.toast.getTop();
    if (toast) {
      toast.dismiss();
    }
  }

  ngOnInit() {
    console.log();
  }
}
