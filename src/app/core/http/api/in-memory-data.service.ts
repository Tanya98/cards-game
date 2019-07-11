import { Injectable } from '@angular/core';
import { Card } from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
   createDb() {
    // tslint:disable-next-line: variable-name
    const playground_1: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
    ];
    // tslint:disable-next-line: variable-name
    const playground_2: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg'
      },
    ];
    // tslint:disable-next-line: variable-name
    const playground_3: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg'
      },
      {
        id: 18,
        img: '../../assets/images/infinity-stones.jpg'
      },
      {
        id: 20,
        img: '../../assets/images/venom.jpg'
      },
      {
        id: 22,
        img: '../../assets/images/star-lord.jpg'
      },
      {
        id: 18,
        img: '../../assets/images/infinity-stones.jpg'
      },
      {
        id: 19,
        img: '../../assets/images/red-marvel.jpg'
      },
      {
        id: 24,
        img: '../../assets/images/spider.jpg'
      },
      {
        id: 20,
        img: '../../assets/images/venom.jpg'
      },
      {
        id: 22,
        img: '../../assets/images/star-lord.jpg'
      },
      {
        id: 23,
        img: '../../assets/images/woman.jpg'
      },
      {
        id: 19,
        img: '../../assets/images/red-marvel.jpg'
      },
      {
        id: 24,
        img: '../../assets/images/spider.jpg'
      },
      {
        id: 26,
        img: '../../assets/images/wonder-woman.jpg'
      },
      {
        id: 27,
        img: '../../assets/images/wolverine.jpg'
      },
      {
        id: 25,
        img: '../../assets/images/green-arrow.jpg'
      },
      {
        id: 23,
        img: '../../assets/images/woman.jpg'
      },
      {
        id: 29,
        img: '../../assets/images/iron-man.jpg'
      },
      {
        id: 26,
        img: '../../assets/images/wonder-woman.jpg'
      },
      {
        id: 27,
        img: '../../assets/images/wolverine.jpg'
      },
      {
        id: 30,
        img: '../../assets/images/sorcerer.jpg'
      },
      {
        id: 25,
        img: '../../assets/images/green-arrow.jpg'
      },
      {
        id: 29,
        img: '../../assets/images/iron-man.jpg'
      },
      {
        id: 31,
        img: '../../assets/images/man.jpg'
      },
      {
        id: 28,
        img: '../../assets/images/cat-woman.jpg'
      },
      {
        id: 32,
        img: '../../assets/images/captain-america.jpg'
      },
      {
        id: 30,
        img: '../../assets/images/sorcerer.jpg'
      },
      {
        id: 21,
        img: '../../assets/images/super-man.jpg'
      },
      {
        id: 28,
        img: '../../assets/images/cat-woman.jpg'
      },
      {
        id: 31,
        img: '../../assets/images/man.jpg'
      },
      {
        id: 17,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 32,
        img: '../../assets/images/captain-america.jpg'
      },
      {
        id: 17,
        img: '../../assets/images/captain-marvel.jpg'
      },
      {
        id: 21,
        img: '../../assets/images/super-man.jpg'
      },
    ];
    return { playground1: playground_1, playground2: playground_2, playground3: playground_3 };
  }
}
