import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalCon: ModalController) {}
  
  async closeModal() {
    await this.modalCon.dismiss();
  }
  ngOnInit() {}
}
