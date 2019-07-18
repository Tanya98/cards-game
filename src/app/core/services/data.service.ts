import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {

  private playground = 'api/playground';

  constructor(public http: HttpClient) { }

  public getCards() {
    return this.http.get(this.playground);
  }

}
