import { Cliente } from "./Cliente";

export class Factura {
  public static id_clase : number = 0;
  private _iva: number;
  private _totalFactura: number;
  private _cliente: Cliente;
  private _idFactura: number;

  constructor (cli_e : Cliente, total : number = 0, iva : number = 0) {
    Factura.id_clase++;
    this._idFactura = Factura.id_clase;
    this._iva = iva;
    this._cliente = cli_e;
    this._totalFactura = total;
  }

  public get idFactura(): number {
    return this._idFactura;
  }
  public set idFactura(value: number) {
    this._idFactura = value;
  }
  public get cliente(): Cliente {
    return this._cliente;
  }
  public set cliente(value: Cliente) {
    this._cliente = value;
  }
  public get totalFactura(): number {
    return this._totalFactura;
  }
  public set totalFactura(value: number) {
    this._totalFactura = value;
  }
  public get iva(): number {
    return this._iva;
  }
  public set iva(value: number) {
    this._iva = value;
  }
  limpiarFactura (a:void) : void{
    this._cliente.nombre = "";
    this._totalFactura = 0;
    this._iva = 0;
  }

}
