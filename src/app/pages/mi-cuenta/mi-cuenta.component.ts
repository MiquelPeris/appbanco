import { Component } from '@angular/core';
import { usuarios } from 'src/app/datos/usuarios-ejemplo';


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {

  cuenta: any = usuarios[1];

}
