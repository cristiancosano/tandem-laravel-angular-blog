import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultComponent } from './button-default/button-default.component';



@NgModule({
  declarations: [
    ButtonDefaultComponent
  ],
  exports: [
    ButtonDefaultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonsModule { }
