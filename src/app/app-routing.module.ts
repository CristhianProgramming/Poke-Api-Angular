import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pokemon/pages/home/home.component';
import { ListaComponent } from './pokemon/pages/lista/lista.component';
import { DeatilsComponent } from './pokemon/pages/deatils/deatils.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'home'},
  {path:'lista',component:ListaComponent,title:'list'},
  {path:'detail/:nombre',component:DeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
