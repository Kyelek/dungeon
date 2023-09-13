import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PrimeraPantallaComponent } from './primera-pantalla/primera-pantalla.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';
const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'primeraPantalla',
    component: PrimeraPantallaComponent
  },
  {
    path: 'segundaPantalla',
    component: SegundaPantallaComponent
  }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
