import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cliente: any = null;

  constructor(private clientService:ClienteService){}

  ngOnInit(): void {
    this.cliente = this.clientService.leerSesion();
      console.log('Logueado: ', this.cliente);
}
  // ngOnInit(): void {
  //     this.clientService.obtenerClientes().subscribe(clientes => {
  //       console.log({clientes});
  //     });
  // }
}
