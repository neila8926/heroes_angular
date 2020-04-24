import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/hereos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  

  constructor(private _heroesServices: HeroesService,
              private router:Router
    ) { 
    console.log("Constructor");
    }


  ngOnInit(): void {
    this.heroes=this._heroesServices.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['/heroe',index]);


  }

}
