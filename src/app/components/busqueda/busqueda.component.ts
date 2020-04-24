import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/hereos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
   heroe:any={};
  parametroBucado:string;
 

  
  constructor(private activateRouter:ActivatedRoute,
    private _heroesService:HeroesService
) {

}

  ngOnInit() {
    this.activateRouter.params.subscribe(params=>{
     this.parametroBucado=(params['henc']);
      this.heroe=this._heroesService.buscarHeroe(params['henc']);
      console.log(this.heroe);
      
      });
  }

}
