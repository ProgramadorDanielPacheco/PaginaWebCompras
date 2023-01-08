import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FacturaComponent } from './factura/factura.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { ErrorInicioSesionComponent } from './error-inicio-sesion/error-inicio-sesion.component';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'login', component: CatalogoComponent},
  {path: 'error', component: ErrorInicioSesionComponent},
  {path: 'carrito', component: PaginaCarritoComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'cerrar', component: InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
