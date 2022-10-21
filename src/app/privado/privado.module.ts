import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { HomeComponent } from './home/home.component';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaginaUnoComponent,
    PaginaDosComponent
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
