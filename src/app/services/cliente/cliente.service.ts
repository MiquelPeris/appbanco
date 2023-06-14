import { Injectable } from '@angular/core';
import { usuarios } from 'src/app/datos/usuarios-ejemplo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  hacerLogin(email: string, password: string) {
    // for (let i = 0; i < clientes.length; i++) {
    //   const cliente = clientes[i]
    //   if (email === cliente.email && password === cliente.password) {
    //     return cliente;
    //   }
    // }

    for (let usuario of usuarios) {
      if (email === usuario.email && password === usuario.password) {
        return usuario;
      }
    }
    return null;
  }


}
