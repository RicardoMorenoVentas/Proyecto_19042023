import { Component } from '@angular/core';
import { CRUDServiceService } from '../crud-service.service';
import { Factura } from 'src/_modelo/Factura';
import { Cliente } from 'src/_modelo/Cliente';

@Component({
  selector: 'app-mostrar-facturas',
  templateUrl: './mostrar-facturas.component.html',
  styleUrls: ['./mostrar-facturas.component.css']
})
export class MostrarFacturasComponent {
  private _crud : CRUDServiceService;
  private _lista_facturas: Array<Factura> = [];
  private _id_query: number = 0;
  private _factura_seleccinada: Factura = new Factura(new Cliente());
  private _editar: boolean = false;

  constructor(crud: CRUDServiceService){
    this._crud = crud;
    this._lista_facturas = this._crud.arrayFacturas;
  }

  public get lista_facturas(): Array<Factura> {
    return this._lista_facturas;
  }
  public set lista_facturas(value: Array<Factura>) {
    this._lista_facturas = value;
  }
  public get id_query(): number {
    return this._id_query;
  }
  public set id_query(value: number) {
    this._id_query = value;
  }
  public get factura_seleccinada(): Factura {
    return this._factura_seleccinada!;
  }
  public set factura_seleccinada(value: Factura) {
    this._factura_seleccinada = value;
  }
  public get editar(): boolean {
    return this._editar;
  }
  public set editar(value: boolean) {
    this._editar = value;
  }

  revisar_actual() : boolean {
    return this._factura_seleccinada!.cliente.nombre != "Valor por defecto";
  }

  eliminar_factura() : void {
    this._crud.eliminarFactura(this._id_query);
  }

  obtener_factura() : void {
    this._factura_seleccinada = this._crud.consultarFactura(this._id_query)!;
  }

  editar_factura() : void {
    this._editar = true;
  }

  mandar_edit() : void {
    this._editar = false;
    this._crud.actualizarFactura(this._factura_seleccinada!,this._id_query);
  }
}
