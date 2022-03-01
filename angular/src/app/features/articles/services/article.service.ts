import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaravelPagination } from '@shared/pagination/interfaces/laravel-pagination';
import { environment } from '@environment/environment';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private host = `${environment.apiHost}/articles`;

  constructor(private http: HttpClient) { }

  getArticles(host: string = this.host){
    return this.http.get<LaravelPagination<Article>>(host);
  }

  createArticle(title: string, description: string){
    const params = new HttpParams().appendAll({ title, description });
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.host, params, {headers})
  }
}
