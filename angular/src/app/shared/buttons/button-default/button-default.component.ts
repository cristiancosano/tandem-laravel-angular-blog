import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent implements OnInit {

  @Input() type = 'button'
  @Input() color = 'primary'

  constructor() { }

  ngOnInit(): void {
  }

}
