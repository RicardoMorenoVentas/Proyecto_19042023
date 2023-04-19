import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactarComponent } from './contactar/contactar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path: 'mostrar-factura', title:'Facturas' ,component:MostrarFacturasComponent},
  {path: 'inicio', title:'Bienvenidos' ,component:InicioComponent},
  {path: 'contactar', title:'Contacto' ,component:ContactarComponent},
  {path: 'quienes-somos', title:'Quienes somos' ,component:QuienesSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
