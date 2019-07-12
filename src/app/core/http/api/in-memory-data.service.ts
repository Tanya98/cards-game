import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
    const playground_1: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'

      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg'
      },
    ];
    const playground_2: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg'
      },
    ];
    const playground_3: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 8,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 4,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg'

      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 7,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 3,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg'

      },
      {
        id: 5,
        img: '../../assets/images/captain.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 9,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 10,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 13,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 12,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 15,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 14,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 11,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 16,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 18,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 20,
        img: '../../assets/images/venom.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 22,
        img: '../../assets/images/star-lord.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 18,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 19,
        img: '../../assets/images/red-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 24,
        img: '../../assets/images/spider.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 20,
        img: '../../assets/images/venom.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 22,
        img: '../../assets/images/star-lord.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 23,
        img: '../../assets/images/woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 19,
        img: '../../assets/images/red-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 24,
        img: '../../assets/images/spider.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 26,
        img: '../../assets/images/wonder-woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 27,
        img: '../../assets/images/wolverine.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 25,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 23,
        img: '../../assets/images/woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 29,
        img: '../../assets/images/iron-man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 26,
        img: '../../assets/images/wonder-woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 27,
        img: '../../assets/images/wolverine.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 30,
        img: '../../assets/images/sorcerer.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 25,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 29,
        img: '../../assets/images/iron-man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 31,
        img: '../../assets/images/man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 28,
        img: '../../assets/images/cat-woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 32,
        img: '../../assets/images/captain-america.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 30,
        img: '../../assets/images/sorcerer.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 21,
        img: '../../assets/images/super-man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 28,
        img: '../../assets/images/cat-woman.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 31,
        img: '../../assets/images/man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 17,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 32,
        img: '../../assets/images/captain-america.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 17,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg'
      },
      {
        id: 21,
        img: '../../assets/images/super-man.jpg',
        bg: '../../assets/images/bg.jpg'
      },
    ];
    return { playground1: playground_1, playground2: playground_2, playground3: playground_3 };
  }
}
