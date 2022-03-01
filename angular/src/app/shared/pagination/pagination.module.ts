import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaravelPaginationComponent } from './components/laravel-pagination/laravel-pagination.component';



@NgModule({
  declarations: [
    LaravelPaginationComponent
  ],
  exports: [
    LaravelPaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginationModule { }
