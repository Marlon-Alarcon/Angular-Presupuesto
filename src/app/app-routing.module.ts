import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {
    path: 'presupuesto', component: PresupuestosComponent,
  },

  {
    path: 'gastos', component: GastosComponent,
  },
  {
    path: '**', redirectTo: "presupuesto", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
