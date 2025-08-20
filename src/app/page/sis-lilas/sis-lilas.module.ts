import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SisLilasPageRoutingModule } from './sis-lilas-routing.module';

import { SisLilasPage } from './sis-lilas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SisLilasPageRoutingModule
  ],
  declarations: []
})
export class SisLilasPageModule {}
