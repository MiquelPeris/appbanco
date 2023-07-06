import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Registro } from './registro/registro.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


@NgModule({
  declarations: [LoginComponent, Registro, RegistrarseComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
