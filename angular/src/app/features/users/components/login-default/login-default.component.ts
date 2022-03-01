import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '@core/interfaces/token';
import { TokenService } from '@core/services/token.service';
import { LoginService } from '@features/users/services/login.service';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent implements OnInit {

  public email = '';
  public password = '';
  public emailError: Array<string> | undefined;
  public passwordError: Array<string> | undefined;
  public messageError: string | undefined;

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  change(){
  }

  login(){
    this.loginService.login(this.email, this.password).subscribe({
        next: (data: Token) => {
          this.tokenService.set(data.token)
          this.router.navigate(['/']);
        },
        error: this.handleError.bind(this)
    });
  }

  handleError(error: any){
    console.log(error)
    this.emailError = undefined;
    this.passwordError = undefined;
    const data = error.error.data;
    this.messageError = error.error.message;
    if(data != undefined){
      this.emailError = data.email;
      this.passwordError = data.password;
    }

  }

}


