import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) {}

  urlApi: string = 'http://localhost:8080/transferencia';

  // traer las transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  };

  obtenerTransferenciasEnviadasPorId(id: number){
    return this.http.get(`${this.urlApi}/ordenante/${id}`);
  };

  obtenerTransferenciasRecibidasPorId(id: number){
    return this.http.get(`${this.urlApi}/beneficiario/${id}`);
  };

  guardarTransferencia(transferencia: any){
    return this.http.post(this.urlApi, transferencia);

  }

  obtenerTransfrenciasPorId(id: number){
    const url = `${this.urlApi}/${id}`
    return this.http.get(url)
  }



  

  // traer una transferencia por id

  // guardar una transferencia

  // borrar una transferencia por id
}
