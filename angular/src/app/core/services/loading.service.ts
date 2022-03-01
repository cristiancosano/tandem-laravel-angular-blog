import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private requests: HttpRequest<unknown>[] = [];
  private status$ = new BehaviorSubject<boolean>(this.getStatus());


  constructor() { }

  getStatus(){
    return this.requests.length != 0;
  }

  getStatus$(): Observable<boolean> {
    return this.status$.asObservable();
  }

  attach(request: HttpRequest<unknown>){
    this.requests.push(request);
    this.status$.next(this.getStatus());
  }
  detach(request: HttpRequest<unknown>){
    this.requests = this.requests.filter(value => request !== value);
    this.status$.next(this.getStatus());
  }
}
