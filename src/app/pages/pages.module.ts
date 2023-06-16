import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { IngresosGastosComponent } from './ingresos-gastos/ingresos-gastos.component';
import { TransferenciaNuevaComponent } from './transferencia-nueva/transferencia-nueva.component';
import { TransferenciasListaComponent } from './transferencias-lista/transferencias-lista.component';
import { TransferenciasDetalleComponent } from './transferencias-detalle/transferencias-detalle.component';


@NgModule({
  declarations: [DashboardComponent, TransferenciasRecibidasComponent, TransferenciasEnviadasComponent, MiCuentaComponent, IngresosGastosComponent, TransferenciaNuevaComponent, TransferenciasListaComponent, TransferenciasDetalleComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule, 
    ComponentesModule,
  ]
})
export class PagesModule { }
