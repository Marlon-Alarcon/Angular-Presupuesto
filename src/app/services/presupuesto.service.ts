import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto:number
  restante:number

  private gasto$ = new Subject<any>()

  constructor() {
    this.presupuesto = 0
    this.restante = 0
  }

  agregargasto(sendGasto:any){
    this.restante = this.restante - sendGasto.gastar
    this.gasto$.next(sendGasto)
  }

  getGasto(): Observable<any> {
    return this.gasto$.asObservable()
  }

}
