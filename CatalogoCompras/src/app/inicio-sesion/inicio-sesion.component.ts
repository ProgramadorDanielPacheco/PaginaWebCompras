import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  constructor(private router: Router){}
  email: string= "danielpacheco842005@gmail.com"
  contrasena: string= "girasol123"
  correo1: any;
  password: any;
  ngOnInit(): void {
    localStorage.clear();
  }

  inicio(){
    if(this.correo1==this.email ){
      this.router.navigate(['login'])
    }


  }




}
