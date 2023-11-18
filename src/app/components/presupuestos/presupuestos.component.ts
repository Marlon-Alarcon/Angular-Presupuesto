import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  cantidad:number;
  valorincorrecto:boolean;

  constructor(public toastr: ToastrService) { 
    this.cantidad = 0
    this.valorincorrecto = false
  }

  ngOnInit() {
  }

  showSuccess(){
    this.toastr.success('Puedes hacer el presupuesto', '🤙 Exelente', {
   timeOut: 3000,
    })
  }

  showWarning(){
    this.toastr.warning('Presupuesto no valido', 'Invalido', {
    timeOut: 3000,
    });
  }

  showError(){
    this.toastr.error('No es un numero', 'Error', {
   timeOut: 3000,
    });
  }

  agregar(){
    // console.log(this.cantidad)

    if(!isNaN(Number(this.cantidad))){
      if(Number(this.cantidad) > 0 ){
        this.valorincorrecto = false
        this.showSuccess()
      }

      else{
        this.valorincorrecto = true
        this.showWarning()

        setTimeout(() => {
          this.valorincorrecto = false;
        }, 3000);
      }
      
    }
    else{
      if (typeof this.cantidad === 'string'){
        this.showError();
      }
    }
  }


}
