import { Component, OnInit } from '@angular/core';
import { LaravelPagination } from '@shared/pagination/interfaces/laravel-pagination';
import { Article } from '@features/articles/interfaces/article';
import { ArticleService } from '@features/articles/services/article.service';

@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})
export class ArticlesGridComponent implements OnInit {

  public articles: Article[] = [];
  public pagination: LaravelPagination<Article> | undefined;
  private articlesSubscription;

  constructor(private articleService: ArticleService) {
    this.articlesSubscription = this.articleService.getArticles().subscribe((currentPage: LaravelPagination<Article>) =>{
      this.articles = currentPage.data;
      this.pagination = currentPage;
    })
  }

  ngOnInit(): void { }

  public changePage(page: string){
    this.articlesSubscription.unsubscribe();
    this.articleService.getArticles(page).subscribe((currentPage: LaravelPagination<Article>) =>{
      this.articles = currentPage.data;
      this.pagination = currentPage;
    })
  }

}
