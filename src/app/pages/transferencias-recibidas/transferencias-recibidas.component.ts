import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css'],
})
export class TransferenciasRecibidasComponent {

  transferencias: any = null;

  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}
    ngOnInit(){
      this.cliente = this.clienteService.leerSesion();
      this.cargarTransferenciasRecibidas()
        }

      cargarTransferenciasRecibidas(){
        this.transferenciaService
        .obtenerTransferenciasRecibidasPorId(this.cliente.id)
        .subscribe
        ((transferenciasCargadas: any) =>{
          console.log({transferenciasCargadas});
          this.transferencias = transferenciasCargadas;
        });
      }

}
