import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { IngresosGastosComponent } from './ingresos-gastos/ingresos-gastos.component';
import { TransferenciaNuevaComponent } from './transferencia-nueva/transferencia-nueva.component';
import { TransferenciasListaComponent } from './transferencias-lista/transferencias-lista.component';
import { TransferenciasDetalleComponent } from './transferencias-detalle/transferencias-detalle.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: "transferencias-recibidas",
    component: TransferenciasRecibidasComponent,
  },
  {
    path: "transferencias-enviadas",
    component: TransferenciasEnviadasComponent,
  },
  {
    path: "mi-cuenta",
    component: MiCuentaComponent,
  },
  {
    path: "ingresos-gastos",
    component: IngresosGastosComponent,
  },
  {
    path: "transferencia-nueva",
    component: TransferenciaNuevaComponent,
  },
  {
    path: "transferencias-lista",
    component: TransferenciasListaComponent,
  },
  {
    path: "transferencias-lista/:id",
    component: TransferenciasDetalleComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
