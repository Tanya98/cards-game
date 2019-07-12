import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card";

@Injectable({ providedIn: 'root' })

export class DataService {
  private playground1 = 'api/playground1';
  private playground2 = 'api/playground2';
  private playground3 = 'api/playground3';

  constructor(public http: HttpClient){}

  public getPlayground1(){
    return this.http.get(this.playground1)
  }

  public getPlayground2(){
    return this.http.get(this.playground2);
  }

  public getPlayground3(){
    return this.http.get(this.playground3);
  }

}
