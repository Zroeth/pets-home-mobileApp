import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//Modulos
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: 'agregar-cuentas',
    pathMatch: 'full',
  },
  {
    path: 'agregar-cuentas',
    loadChildren: () => import('./agregar-cuentas/agregar-cuentas.module').then( m => m.AgregarCuentasPageModule)
  },  {
    path: 'agregar-cuentas',
    loadChildren: () => import('./agregar-cuentas/agregar-cuentas.module').then( m => m.AgregarCuentasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
