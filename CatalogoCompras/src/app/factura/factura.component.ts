import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    this.obtencion1()
  }

  item1: any;
  item2: any;
  item3: any;

  obtencion1(){
    this.item1=localStorage.getItem('valor_item1');
    this.item2=localStorage.getItem('valor_item2');
    this.item3=localStorage.getItem('valor_item3');
  }

  regresar(){
    this.router.navigate(['login'])
  }
  logout(){
    this.router.navigate(['cerrar'])
  }

}
