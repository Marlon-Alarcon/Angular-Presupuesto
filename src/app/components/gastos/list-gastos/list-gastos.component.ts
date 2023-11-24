import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-list-gastos',
  templateUrl: './list-gastos.component.html',
  styleUrls: ['./list-gastos.component.css']
})
export class ListGastosComponent implements OnInit, OnDestroy {

  suscription:Subscription
  presupuesto:number
  restante:number
  listgasto:any = []
  persistente: any

  constructor(private presupuestoservice:PresupuestoService) {
    this.presupuesto = 0
    this.restante = 0
    

    this.suscription = this.presupuestoservice.getGasto().subscribe(data => {

      this.restante = this.restante - data.gastar
      this.listgasto.push(data)
      console.log(data,"Esto es lo que viene")
    },error => {
      console.log(error,'Ha ocurrido un error')
    })
      
   }

  ngOnInit() {
    this.presupuesto = this.presupuestoservice.presupuesto
    this.restante = this.presupuestoservice.restante
  }

  ngOnDestroy(){
    this.suscription.unsubscribe
  }

  alicarColorRestante() {

    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    } else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }else {
      return 'alert alert-info';
    }
  }

}
