import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCuentasPageRoutingModule } from './agregar-cuentas-routing.module';

import { AgregarCuentasPage } from './agregar-cuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCuentasPageRoutingModule
  ],
  declarations: [AgregarCuentasPage]
})
export class AgregarCuentasPageModule {}
