import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './pages/lista/lista.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeatilsComponent } from './pages/deatils/deatils.component';



@NgModule({
  declarations: [
    ListaComponent,
    HomeComponent,
    DeatilsComponent
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule
  ]
})
export class PokemonModule { }
