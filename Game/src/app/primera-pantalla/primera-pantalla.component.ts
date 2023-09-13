import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primera-pantalla',
  templateUrl: './primera-pantalla.component.html',
  styleUrls: ['./primera-pantalla.component.css']
})
export class PrimeraPantallaComponent implements OnInit {


  constructor(private router: Router){}

  opcionSeleccionada: string = ' ';
  respuestaSeleccionada: boolean = true;

  ngOnInit(): void {
      
  }

  
  respuestaCorrecta(){

    if(this.opcionSeleccionada === 'unacerradura'){
      alert("respuesta corrrecta, La puerta se abre y recibes un deseo sobre el otro jugador");
      // funcion que cambia el mapa a la siguiente puerta donde habrá dos enemigos
      // en vez de hacer un alert, seria mejor cambiar el contenido del texto del parrafo 
    }else{
      alert("el jugador X ha perdido 1 punto de vida y la puerta se ha abierto");
    }
    this.respuestaSeleccionada = false;
  }
  segundaPantalla(){
    this.router.navigate(['/segundaPantalla']);
  }


}
