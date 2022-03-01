import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleCardComponent } from './create-article-card.component';

describe('CreateArticleCardComponent', () => {
  let component: CreateArticleCardComponent;
  let fixture: ComponentFixture<CreateArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
