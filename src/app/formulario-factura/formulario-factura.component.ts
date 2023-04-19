import { Component } from '@angular/core';
import { Cliente } from 'src/_modelo/Cliente';
import { Factura } from 'src/_modelo/Factura';
import { CRUDServiceService } from '../crud-service.service';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.css']
})
export class FormularioFacturaComponent {
  private _clienteFactura: Cliente = new Cliente("");
  private _factura: Factura = new Factura(this._clienteFactura);
  private _crud : CRUDServiceService;

  constructor(crud: CRUDServiceService) {this._crud = crud;}

  public get factura(): Factura {
    return this._factura;
  }
  public set factura(value: Factura) {
    this._factura = value;
  }
  public get clienteFactura(): Cliente {
    return this._clienteFactura;
  }
  public set clienteFactura(value: Cliente) {
    this._clienteFactura = value;
  }

  reiniciarFormulario() : void {
    this._factura.limpiarFactura();
  }

  mandarFormulario() : void {
    this._crud.anadirFactura(this._factura);
    this._clienteFactura = new Cliente("");
    this._factura = new Factura(this._clienteFactura);
  }

}
