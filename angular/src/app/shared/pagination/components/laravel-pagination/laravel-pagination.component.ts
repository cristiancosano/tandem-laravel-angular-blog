import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { LaravelPagination } from '@shared/pagination/interfaces/laravel-pagination';
import { last } from 'rxjs';

@Component({
  selector: 'app-laravel-pagination',
  templateUrl: './laravel-pagination.component.html',
  styleUrls: ['./laravel-pagination.component.scss']
})
export class LaravelPaginationComponent implements OnInit, OnChanges {
  @Input() pagination: LaravelPagination<any> | undefined;
  @Output() changePage = new EventEmitter<string>();
  pages: Array<number> = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    //Scroll to top
    window.scrollTo(0,0)
    this.computePageNumbers();
  }

  //Compute new pagination
  computePageNumbers(){
    let pages = [];
    if(this.pagination!=undefined){
      //the current page
      const currentPage = Number(this.pagination.current_page);
      //las page value
      const lastPage = Number(this.pagination.last_page);
      //Max number of pages excluding first and last pages.
      const maxPages = 6; 
      
      pages.push(1);

      let initPage = currentPage - Number((maxPages/2).toFixed(2))

      //Init pages starts excluding the first page because we have previously included it
      if(initPage < 2) initPage = 2;


      for(let i = 0; (i < maxPages) && (initPage+i < lastPage); i++){
        //If next sibling of first page not is 2 we include a 0. Template renders 0 as '...'
        if(initPage+i != 2 && i==0) pages.push(0)
        pages.push(initPage+i);
      }
      
      //If previous sibling of last page not is lastpage-1 we include a 0. Template renders 0 as '...'
      if(initPage+maxPages-1 < lastPage - 1) pages.push(0)

      pages.push(lastPage)
    }

    this.pages = pages;
  }


  getPage(page: number){
    if(this.pagination != undefined){
    let pageLink: string | undefined = undefined;
      pageLink = this.pagination.links.find(element => Number(element.label) === page)?.url;
      if(pageLink !== undefined){
        this.changePage.emit(pageLink);
      }
    }
   
  }

}
