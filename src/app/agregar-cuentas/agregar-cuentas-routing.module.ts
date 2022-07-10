import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCuentasPage } from './agregar-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCuentasPageRoutingModule {}
