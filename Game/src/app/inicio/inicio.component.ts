import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyComponent } from '../lobby/lobby.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  private componenteLobby: LobbyComponent = new LobbyComponent(this.router);
  private audio = new Audio('../../assets/musica/medieval-inicio.mp3');
  
  constructor(private router :Router){}

  ngOnInit(){
    // this.sound(); // ACTIVAR PARA QUE LA MUSICA EMPIECE
    
  }

   sound(){
    this.audio.loop = true;
    this.audio.play();     
    console.log("its works?");
  }

  setMusicVolume(volume: number){
    this.audio.volume = volume;
  }
  empezarGame(){
    this.router.navigate(['/lobby']);
    this.setMusicVolume(0.3);
    this.componenteLobby.narrador();
  }
 
}
