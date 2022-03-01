import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() published_at = '';
  @Input() author = '';

  constructor() { }

  ngOnInit(): void {
  }

}
