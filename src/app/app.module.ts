import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioFacturaComponent } from './formulario-factura/formulario-factura.component';
import { CRUDServiceService } from './crud-service.service';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactarComponent } from './contactar/contactar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioFacturaComponent,
    MostrarFacturasComponent,
    InicioComponent,
    ContactarComponent,
    QuienesSomosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Meter aquí servicios
  providers: [CRUDServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
