import { Component } from '@angular/core';
import { transferenciasEnviadas} from 'src/app/datos/transferencias-enviadas'
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css'],
})
export class TransferenciasEnviadasComponent {

  transferencias: any[] = [];

  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}
    ngOnInit(){
      this.cliente = this.clienteService.leerSesion();
      this.cargarTransferenciasEnviadas()
        }

      cargarTransferenciasEnviadas(){
        this.transferenciaService
        .obtenerTransferenciasEnviadasPorId(this.cliente.id)
        .subscribe
        ((transferenciasCargadas: any) =>{
          console.log({transferenciasCargadas});
          this.transferencias = transferenciasCargadas;
        });
      }
}
