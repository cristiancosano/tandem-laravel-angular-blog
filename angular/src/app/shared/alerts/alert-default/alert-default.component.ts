import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-default',
  templateUrl: './alert-default.component.html',
  styleUrls: ['./alert-default.component.scss']
})
export class AlertDefaultComponent implements OnInit {

  @Input() message = '';
  @Input() color = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}