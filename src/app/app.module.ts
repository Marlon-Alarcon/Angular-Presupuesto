import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListGastosComponent } from './components/gastos/list-gastos/list-gastos.component';
import { CreateGastosComponent } from './components/gastos/create-gastos/create-gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestosComponent,
    GastosComponent,
    ListGastosComponent,
    CreateGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
