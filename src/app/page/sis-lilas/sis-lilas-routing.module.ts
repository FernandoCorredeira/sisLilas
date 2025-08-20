import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SisLilasPage } from './sis-lilas.page';

const routes: Routes = [
  {
    path: '',
    component: SisLilasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisLilasPageRoutingModule {}
