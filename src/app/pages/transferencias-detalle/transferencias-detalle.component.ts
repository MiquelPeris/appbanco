import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo';

@Component({
  selector: 'app-transferencias-detalle',
  templateUrl: './transferencias-detalle.component.html',
  styleUrls: ['./transferencias-detalle.component.css']
})
export class TransferenciasDetalleComponent {

  transferencia: any = transferenciasRecibidas[1]

}
