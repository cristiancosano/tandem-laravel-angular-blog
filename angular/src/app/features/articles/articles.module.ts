import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticlesGridComponent } from './components/articles-grid/articles-grid.component';
import { CreateArticleCardComponent } from './components/create-article-card/create-article-card.component';
import { ButtonsModule } from '@shared/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from '@shared/pagination/pagination.module';
import { AlertsModule } from '@shared/alerts/alerts.module';



@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticlesGridComponent,
    CreateArticleCardComponent
  ],
  exports: [
    ArticlesGridComponent,
    CreateArticleCardComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MatIconModule,
    ReactiveFormsModule,
    PaginationModule,
    AlertsModule
  ]
})
export class ArticlesModule { }
