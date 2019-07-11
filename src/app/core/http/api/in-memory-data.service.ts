import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService{
  static createDb() {
    const categories = [
    ];
    return { category: categories};
  }
}
