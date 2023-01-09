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
  nombre:any
  objeto1= "Audifono con microfonos--------$150"
  objeto2= "Celular Xiaomi--------$500"
  objeto3= "Teclado Gamer--------$200"

  ngOnInit(): void {
    localStorage.clear()
    this.agregar1()
  }

  agregar1(){
    this.nombre=localStorage.getItem('valor_nombre')

  }
  item1(){
    localStorage.setItem('valor_item1',this.objeto1)
  }
  item2(){
    localStorage.setItem('valor_item2',this.objeto2)
  }
  item3(){
    localStorage.setItem('valor_item3',this.objeto1)
  }

  limpiar1(){
    localStorage.removeItem(this.objeto1)
  }
  limpiar2(){
    localStorage.removeItem(this.objeto2)
  }
  limpiar3(){
    localStorage.removeItem(this.objeto3)
  }


  logout(){
    this.router.navigate(['cerrar'])
  }
  factura(){
    this.router.navigate(['factura'])
  }

}
