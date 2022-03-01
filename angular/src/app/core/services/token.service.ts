import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public loggedIn$: BehaviorSubject<boolean>;


  constructor() {
    this.loggedIn$ = new BehaviorSubject(localStorage.getItem('token') !== null);
  }

  set(token: string){
    localStorage.setItem('token', JSON.stringify(token));
    this.isLoggedIn();
  }

  get(): string | null{
    return localStorage.getItem('token');
  }

  delete(){
    localStorage.removeItem('token');
    this.isLoggedIn();
  }

  isLoggedIn$(): Observable<boolean>{
    return this.loggedIn$.asObservable();
  }

  isLoggedIn(): boolean{
    const loggedIn = localStorage.getItem('token') !== null;
    this.loggedIn$.next(loggedIn)
    return loggedIn;
  }
}
