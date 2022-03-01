import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderDefaultComponent,
  ],
  exports: [
    HeaderDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class HeadersModule { }
