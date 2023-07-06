import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/clientes-ejemplo';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi: string = "http://localhost:8080/cliente";

  constructor(private http: HttpClient) { }

  hacerLogin(email: string, password: string) {
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i]
      if (email === cliente.email && password === cliente.password) {
        return cliente;
      }
    }

    for (let cliente of clientes) {
      if (email === cliente.email && password === cliente.password) {
        return cliente;
      }
    }
    return null;
  }

  obtenerClientes(){
   return this.http.get(this.urlApi);
  }

  login(email: string, password: string){
    const url = `${this.urlApi}/login?email=${email}&password=${password}`
      return this.http.get(url);
  }

  crearSesion(clienteLogueado: any){
    const clienteJSON = JSON.stringify(clienteLogueado)
      sessionStorage.setItem("sesion", clienteJSON);
  }

  leerSesion(){
    const clienteJSON = sessionStorage.getItem("sesion");
    if(clienteJSON){
      const clienteLogueado = JSON.parse(clienteJSON)
      return clienteLogueado;
    }
    return null;
  }

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }

  guardarCliente(cliente: any){
    return this.http.post(this.urlApi, cliente
      );

  }

}
