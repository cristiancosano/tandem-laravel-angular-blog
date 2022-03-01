import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit {

  public mobileHideMenu = true;
  public loggedIn: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.isLoggedIn$().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  ngOnInit(): void {
  }

  toggle(){
    this.mobileHideMenu = !this.mobileHideMenu;
  }

  logout(){
    this.tokenService.delete();
    this.router.navigate(['/login']);
  }

}
