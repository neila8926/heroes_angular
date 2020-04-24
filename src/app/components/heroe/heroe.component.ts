import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/hereos.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  

  heroe:any={};

  constructor(private activateRouter:ActivatedRoute,
              private _heroesService:HeroesService
    ) {
    this.activateRouter.params.subscribe(params=>{
      console.log(params['id']);
      this.heroe=this._heroesService.getHeroe(params['id']);
    })
   }
   

 

}
