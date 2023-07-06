import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-detalle',
  templateUrl: './transferencias-detalle.component.html',
  styleUrls: ['./transferencias-detalle.component.css']
})
export class TransferenciasDetalleComponent implements OnInit{

  transferencia: any = null;

  constructor(private route: ActivatedRoute, 
    private transferenciaService: TransferenciaService){}

  ngOnInit(): void {
      const TransferenciaIdString = this.route.snapshot.paramMap.get('id');
      let transferenciaId;
      if(TransferenciaIdString){
        transferenciaId = parseInt(TransferenciaIdString);
        this.transferenciaService.obtenerTransfrenciasPorId(transferenciaId).subscribe(
          (transferencia) => {
            console.log({transferencia});
            this.transferencia = transferencia
          });
      }
      

  }
}
