import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FacturaComponent } from './factura/factura.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { ErrorInicioSesionComponent } from './error-inicio-sesion/error-inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    CatalogoComponent,
    FacturaComponent,
    PaginaCarritoComponent,
    ErrorInicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
