import { Component,OnInit } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo';
import { transferenciasEnviadas } from 'src/app/datos/transferencias-enviadas';

@Component({
  selector: 'app-ingresos-gastos',
  templateUrl: './ingresos-gastos.component.html',
  styleUrls: ['./ingresos-gastos.component.css']
})
export class IngresosGastosComponent implements OnInit {
  
  transferencias: any [] = []

  ngOnInit(){
    this.transferencias = this.transferencias.concat(transferenciasRecibidas, transferenciasEnviadas)
    console.log(this.transferencias)
  }

}
