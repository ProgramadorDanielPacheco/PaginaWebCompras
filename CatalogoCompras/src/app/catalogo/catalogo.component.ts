import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {

  }

  logout(){
    this.router.navigate(['cerrar'])
  }
  factura(){
    this.router.navigate(['factura'])
  }

}
