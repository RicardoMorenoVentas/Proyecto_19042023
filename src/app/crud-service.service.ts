import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cliente } from 'src/_modelo/Cliente';
import { Factura } from 'src/_modelo/Factura';

@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {

  private _arrayFacturas: Array<Factura> = [];

  constructor() { }

  public get arrayFacturas(): Array<Factura> {
    return this._arrayFacturas;
  }
  public set arrayFacturas(value: Array<Factura>) {
    this._arrayFacturas = value;
  }

  anadirFactura(fact_e: Factura): void {
    this._arrayFacturas.push(fact_e);
  }

  actualizarFactura(fact_e : Factura, id_factura : number) {
    this.eliminarFactura(id_factura);
    this._arrayFacturas.push(fact_e);
  }

  obtenerFacturas(a: void): Array<Factura> {
    return this._arrayFacturas;
  }

  consultarFactura(id: number): Factura | undefined {
    let pos: number = -1;
    this._arrayFacturas.map((r, ind, arr) => { if (r.idFactura == id) pos = ind });
    if (pos != -1) {
      return this._arrayFacturas.at(pos)!;
    }
    console.error('No se ha encontrado la factura')
    return undefined;

  }

  eliminarFactura(id: number): void {
    let pos: number = -1;
    this._arrayFacturas.map((r, ind, arr) => { if (r.idFactura == id) pos = ind });
    if (pos != -1) {
      this._arrayFacturas.splice(pos, 1);
    } else {
      console.error('No se ha encontrado la factura')
    }
  }
}
