import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelPaginationComponent } from './laravel-pagination.component';

describe('LaravelPaginationComponent', () => {
  let component: LaravelPaginationComponent;
  let fixture: ComponentFixture<LaravelPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaravelPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaravelPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
