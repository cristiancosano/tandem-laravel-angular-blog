import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) {
    if(this.tokenService.isLoggedIn()) this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
