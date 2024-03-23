import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPageRoutingModule } from './component-routing.module';

import { ComponentPage } from './component.page';
import { TabsComponent } from '../tabs/tabs.page';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ComponentPageRoutingModule],
  declarations: [ComponentPage, TabsComponent, ModalComponent],
})
export class ComponentPageModule {}
