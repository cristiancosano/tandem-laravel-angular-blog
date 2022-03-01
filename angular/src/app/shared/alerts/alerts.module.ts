import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDefaultComponent } from './alert-default/alert-default.component';



@NgModule({
  declarations: [
    AlertDefaultComponent
  ],
  exports: [
    AlertDefaultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlertsModule { }
