import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {



  }

   primeraPantalla(){
    this.router.navigate(['/primeraPantalla']); 
   }

  private textoALeer = `En un bosque encantado, oculto entre la espesura, se alza un misterioso castillo en ruinas que resguarda un objeto de increíble poder: la Corona de las Sombras, capaz de conceder un deseo prohibido a quien logre posarla sobre su cabeza.
                      Atraídos por la leyenda, vosotros, audaces aventureros emprenderéis un peligroso viaje hacia sus profundidades. La bruja de enigmáticos poderes y el astuto ladrón de corazón noble, formarán un equipo excepcional para enfrentar los desafíos que aguardan en las sombrías mazmorras del castillo.
                      Dentro de sus muros, los intrépidos exploradores se toparán con trampas mortales, criaturas fantásticas y enigmas milenarios. El tiempo parecerá perderse en aquel lugar embrujado, y la amistad entre ellos se convertirá en su mayor fortaleza para seguir adelante.
                      Sin embargo, antes de alcanzar la Corona de las Sombras, una advertencia resonará en la cámara final: solo podrán tomarla si su deseo es puro y desinteresado, pues su poder conlleva un precio peligroso. En ese momento crucial, deberán decidir sabiamente y, unidos, enfrentarán las consecuencias de su elección en esta emocionante aventura.`;

  
  narrador() {
    
    if ('speechSynthesis' in window) {
      const leyendo = new SpeechSynthesisUtterance(this.textoALeer);
      speechSynthesis.speak(leyendo);
    } else {
      alert('Su navegador no es compatible con la lectura del texto en voz alta, o por favor suba el volumen de su dispositivo de salida de audio');
    }
  }




}

