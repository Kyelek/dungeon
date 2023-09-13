import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-pantalla',
  templateUrl: './segunda-pantalla.component.html',
  styleUrls: ['./segunda-pantalla.component.css']
})

export class SegundaPantallaComponent implements OnInit {

  constructor(private router:Router){}

  accionSeleccionada: string = '';
  estadoRespuesta : boolean = false;

  ngOnInit() {
      this.estadoRespuesta = true;
  }

  accionRealizada(){

    if(this.accionSeleccionada === 'huir'){
      //cuando selecciones una opcion, debe de cambiar el texto y desaparecer los radiobutton y ademas
      // cambiar el boton

      //alert("Has huido como un cobarte, preparate para sufrir las consecuencias...");
      // una prueba que tienes que pasar para no perder
    }else{
      alert("")
      // cambio de pantalla, donde te pegan un golpe y decides huir a curarte
    }
  }
}
