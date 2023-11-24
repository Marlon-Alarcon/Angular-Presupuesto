import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-create-gastos',
  templateUrl: './create-gastos.component.html',
  styleUrls: ['./create-gastos.component.css']
})
export class CreateGastosComponent implements OnInit {

  gasto: any
  descripcion:string
  valorincorrecto:boolean
  constructor(public toastr: ToastrService, private presupuestoservice:PresupuestoService) {
    this.gasto = null
    this.descripcion = ''
    this.valorincorrecto = false
  }

  ngOnInit() {
  }

  showSuccess(){
    this.toastr.success('Gasto registrado', '🤙 Listo', {
   timeOut: 3000,
    })
  }

  showWarning(){
    this.toastr.warning('Descripcion o gastos no validos', 'Invalido', {
    timeOut: 3000,
    });
  }

  showError(){
    this.toastr.error('No es un numero', 'Error', {
   timeOut: 3000,
    });
  }

  presExedido(){
    this.toastr.warning('Presupuesto es mayor al restante', 'Invalido', {
    timeOut: 3000,
    });
  }

  validar(){

    if(Number(this.gasto) > this.presupuestoservice.restante){
      this.presExedido()
      return
    }

    if(!isNaN(Number(this.gasto)) ){
      if(Number(this.gasto) > 0 && this.descripcion !== ''){
        this.valorincorrecto = false
        this.showSuccess()

        const sendGasto = {
          gastar: this.gasto,
          description: this.descripcion
        }

        this.presupuestoservice.agregargasto(sendGasto)

        console.log(sendGasto.gastar)

      }

      else{
          this.valorincorrecto = true
          this.showWarning()
  
          setTimeout(() => {
            this.valorincorrecto = false
          }, 3000);
      }
    }
    else{
      if (typeof this.gasto === 'string'){
        this.showError();
      }
    }
  }


}