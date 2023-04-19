export class Cliente {
  public static id_clase : number = 0;
  private _nombre: string;
  private _id: number;

  constructor ( a : string = "Valor por defecto"){
    Cliente.id_clase++;
    this._nombre = a;
    this._id = Cliente.id_clase;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
}
