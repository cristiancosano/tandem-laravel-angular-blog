import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@core/interfaces/token';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host = `${environment.apiHost}/token`

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const device = 'angular-app';
    const params = new HttpParams().appendAll({ email, password, device });
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<Token>(this.host, params, {headers})
  }

}
