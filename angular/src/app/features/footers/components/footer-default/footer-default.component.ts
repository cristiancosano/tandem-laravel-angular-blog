import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss']
})
export class FooterDefaultComponent implements OnInit {

  public year: string;
  constructor() {
    this.year = this.getCurrentYear();
  }

  ngOnInit(): void {
  }

  getCurrentYear(): string{
    return new Date().getFullYear().toString();
  }

}
