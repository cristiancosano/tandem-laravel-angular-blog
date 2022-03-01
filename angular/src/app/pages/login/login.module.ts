import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HeadersModule } from '@features/headers/headers.module';
import { UsersModule } from '@features/users/users.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeadersModule,
    UsersModule
  ]
})
export class LoginModule { }
