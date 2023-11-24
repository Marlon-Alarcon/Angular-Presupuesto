import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(
    public presupuestoservice:PresupuestoService,
    private route:Router) 

    { }

  ngOnInit() {

    if(this.presupuestoservice.presupuesto === 0){
      this.route.navigate(['presupuesto'])
    }

    console.log(this.presupuestoservice)
  }

}
