import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PrimeraPantallaComponent } from './primera-pantalla/primera-pantalla.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LobbyComponent,
    PrimeraPantallaComponent,
    SegundaPantallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
