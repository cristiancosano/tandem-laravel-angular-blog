import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from '@shared/alerts/alerts.module';
import { ButtonsModule } from '@shared/buttons/buttons.module';



@NgModule({
  declarations: [
    LoginDefaultComponent, 
  ],
  exports: [
    LoginDefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertsModule,
    ButtonsModule
  ]
})
export class UsersModule { }
