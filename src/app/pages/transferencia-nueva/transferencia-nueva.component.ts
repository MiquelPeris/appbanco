import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencia-nueva',
  templateUrl: './transferencia-nueva.component.html',
  styleUrls: ['./transferencia-nueva.component.css']
})
export class TransferenciaNuevaComponent implements OnInit {
  nuevaTransferencia: any = {
    ordenante: {
      id: null,
    },
    beneficiario: {
      id: null,
    },
    concepto: '',
    importe: 0,
  };
  ordenante: any = null;
  feedback: string = "";


  constructor(
    private transferenciaService: TransferenciaService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
  }

  enviarTransferencia() {
    if (this.ordenante) {


      this.nuevaTransferencia.ordenante.id = this.ordenante.id
      this.transferenciaService
        .guardarTransferencia(this.nuevaTransferencia)
        .subscribe((transferenciaGuardada) => {

          console.log({ transferenciaGuardada })
          this.feedback = "Transferencia enviada"
        },
        (error) =>{
          console.log(error);
          this.feedback = "Error al enviar transferencia"
        })
    }
  }
}
