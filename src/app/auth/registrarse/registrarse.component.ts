import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  
 
  nuevoRegistro: any = { 
    usuario: "",
    correo: "",
    gestor:  {
      id: 2
    },
    saldo: 0,
  };
  feedback: string = "";


  constructor(
    private clienteService: ClienteService) { }

  registro() {
      this.clienteService.guardarCliente(this.nuevoRegistro)
        .subscribe((registroGuardado) => {

          console.log({ registroGuardado })
          this.feedback = "Registro completado"
        },
        (error) =>{
          console.log(error);
          this.feedback = "Error al registrarse"
        })
    
  }

}
