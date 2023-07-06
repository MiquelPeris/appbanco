import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private clienteService: ClienteService, private router: Router) {};

  cerrarSesion(){
    this.clienteService.cerrarSesion();
    this.router.navigateByUrl("/pages/dashboard");
  }

  title = 'app-banco';
  
}
