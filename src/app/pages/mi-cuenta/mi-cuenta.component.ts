import { Component } from '@angular/core';
import { clientes } from 'src/app/datos/clientes-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {

  cliente: any = null;
  constructor(private clienteService: ClienteService){}

  ngOnInit(): void{
    this.cliente = this.clienteService.leerSesion();
    console.log('logueado', this.cliente)
  }

}
