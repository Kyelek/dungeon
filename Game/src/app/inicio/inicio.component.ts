import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor(){}

  ngOnInit(){

    let audio = new Audio('../../assets/musica/medieval-inicio.mp3');
    audio.loop = true;
    //audio.play();     // ACTIVAR PARA QUE LA MUSICA EMPIECE
  }


}
