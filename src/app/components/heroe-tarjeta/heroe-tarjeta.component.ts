import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router'
//El input le va a decir a angular que una propiedad que una propiedad que yo quiero especifica va a ser recibida
//desde afuera
//al colocar un inputo me habilita que donde coloque la etiqueta del selector se puedan enviar argumentos desde el padre,
//utilizando el mismo nombre que le coloco a la propiedad

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any={};
  @Input() indice:number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado=new EventEmitter();
   }

  ngOnInit(): void {
  }
   verHeroe(){
  //   console.log(this.indice);
    this.router.navigate(['/heroe',this.indice]);
  //this.heroeSeleccionado.emit(this.indice);

   }

}
