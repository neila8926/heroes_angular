import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/hereos.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

heroe:Heroe[]=[];

constructor(private _heroeService:HeroesService, private router:Router) { }

  ngOnInit(): void {

  }
  buscHeroe(textHeroe:string){
    //let hEncontrado:Heroe[]=[];

    //this.heroe=this._heroeService.buscarHeroe(textHeroe);
    //hEncontrado=this.heroe;
    
    this.router.navigate(['/busqueda',textHeroe]);


    /* this.heroe.forEach(element=>{
      console.log(element.nombre+ " Este es jajaja")
    }); */

  }

}

