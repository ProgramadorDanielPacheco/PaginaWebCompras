import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  constructor(private router: Router){}

  preciototal: any;
  precio1:any
  total: number=0

  ngOnInit(): void {
    localStorage.clear()
  }

  agregar1(){
    this.preciototal=this.preciototal+this.precio1;
  }

  logout(){
    this.router.navigate(['cerrar'])
  }
  factura(){
    this.router.navigate(['factura'])
  }

}
