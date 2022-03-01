import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './create-article.component';
import { HeadersModule } from '@features/headers/headers.module';
import { FootersModule } from '@features/footers/footers.module';
import { ArticlesModule } from '@features/articles/articles.module';


@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    HeadersModule,
    FootersModule,
    ArticlesModule
  ]
})
export class CreateArticleModule { }
