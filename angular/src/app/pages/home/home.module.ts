import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeadersModule } from '@features/headers/headers.module';
import { ArticlesModule } from '@features/articles/articles.module';
import { FootersModule } from '@features/footers/footers.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeadersModule,
    FootersModule,
    ArticlesModule
  ]
})
export class HomeModule { }
