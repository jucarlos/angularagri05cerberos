import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'homepublico',
    loadChildren: () => import('./publico/publico.module').then( m => m.PublicoModule)
  },
  {
    path: 'homeprivado',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./privado/privado.module').then( m => m.PrivadoModule),
  },
  {
    path: '**',
    redirectTo: 'homepublico'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
