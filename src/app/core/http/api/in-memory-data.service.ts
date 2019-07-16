import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const playground1: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1,
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 3,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4
      },
      {
        id: 4,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1,
      },
      {
        id: 5,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 7,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 8,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 9,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
      {
        id: 10,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 11,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4
      },
      {
        id: 12,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 13,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 14,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 15,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3
      },
      {
        id: 16,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
    ];
    const playground2: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 3,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4
      },
      {
        id: 4,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1
      },
      {
        id: 5,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 7,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 8,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 9,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
      {
        id: 10,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 11,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4
      },
      {
        id: 12,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 13,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 14,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 15,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3
      },
      {
        id: 16,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
      {
        id: 17,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 9
      },
      {
        id: 18,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 10
      },
      {
        id: 19,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 13
      },
      {
        id: 20,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 12
      },
      {
        id: 21,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 9
      },
      {
        id: 22,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 10
      },
      {
        id: 23,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 13
      },
      {
        id: 24,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 12
      },
      {
        id: 25,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 15
      },
      {
        id: 26,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 14
      },
      {
        id: 27,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 16
      },
      {
        id: 28,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 11
      },
      {
        id: 29,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 15
      },
      {
        id: 30,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 14
      },
      {
        id: 35,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 18
      },
      {
        id: 31,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 11
      },
      {
        id: 32,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 16
      },
      {
        id: 33,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 17
      },
      {
        id: 34,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 18
      },
      {
        id: 36,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 17
      },
    ];
    const playground3: Card[] = [
      {
        id: 1,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1
      },
      {
        id: 2,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 3,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4
      },
      {
        id: 4,
        img: '../../assets/images/aquaman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 1
      },
      {
        id: 5,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3
      },
      {
        id: 6,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 7,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 8,
        img: '../../assets/images/avengers.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 2
      },
      {
        id: 9,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
      {
        id: 10,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 8
      },
      {
        id: 11,
        img: '../../assets/images/betman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 4

      },
      {
        id: 12,
        img: '../../assets/images/comics.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 6
      },
      {
        id: 13,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 14,
        img: '../../assets/images/gamora.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 7
      },
      {
        id: 15,
        img: '../../assets/images/black-panter.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 3

      },
      {
        id: 16,
        img: '../../assets/images/capitan.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 5
      },
      {
        id: 17,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 9
      },
      {
        id: 18,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 10
      },
      {
        id: 19,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 13
      },
      {
        id: 20,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 12
      },
      {
        id: 21,
        img: '../../assets/images/girl.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 9
      },
      {
        id: 22,
        img: '../../assets/images/groot.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 10
      },
      {
        id: 23,
        img: '../../assets/images/hand.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 13
      },
      {
        id: 24,
        img: '../../assets/images/hulk.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 12
      },
      {
        id: 25,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 15
      },
      {
        id: 26,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 14
      },
      {
        id: 27,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 16
      },
      {
        id: 28,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 11
      },
      {
        id: 29,
        img: '../../assets/images/dedpul.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 15
      },
      {
        id: 30,
        img: '../../assets/images/iron.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 14
      },
      {
        id: 31,
        img: '../../assets/images/raceta.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 11
      },
      {
        id: 32,
        img: '../../assets/images/thor.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 16
      },
      {
        id: 33,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 18
      },
      {
        id: 34,
        img: '../../assets/images/venom.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 20
      },
      {
        id: 35,
        img: '../../assets/images/star-lord.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 22
      },
      {
        id: 36,
        img: '../../assets/images/infinity-stones.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 18
      },
      {
        id: 37,
        img: '../../assets/images/red-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 19
      },
      {
        id: 38,
        img: '../../assets/images/spider.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 24
      },
      {
        id: 39,
        img: '../../assets/images/venom.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 20
      },
      {
        id: 39,
        img: '../../assets/images/star-lord.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 22
      },
      {
        id: 40,
        img: '../../assets/images/woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 23
      },
      {
        id: 41,
        img: '../../assets/images/red-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 19
      },
      {
        id: 42,
        img: '../../assets/images/spider.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 24
      },
      {
        id: 43,
        img: '../../assets/images/wonder-woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 26
      },
      {
        id: 44,
        img: '../../assets/images/wolverine.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 27
      },
      {
        id: 45,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 25
      },
      {
        id: 46,
        img: '../../assets/images/woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 23
      },
      {
        id: 47,
        img: '../../assets/images/iron-man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 29
      },
      {
        id: 48,
        img: '../../assets/images/wonder-woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 26
      },
      {
        id: 49,
        img: '../../assets/images/wolverine.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 27
      },
      {
        id: 50,
        img: '../../assets/images/sorcerer.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 30
      },
      {
        id: 51,
        img: '../../assets/images/green-arrow.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 25
      },
      {
        id: 52,
        img: '../../assets/images/iron-man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 29
      },
      {
        id: 53,
        img: '../../assets/images/man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 31
      },
      {
        id: 54,
        img: '../../assets/images/cat-woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 28
      },
      {
        id: 55,
        img: '../../assets/images/captain-america.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 32
      },
      {
        id: 56,
        img: '../../assets/images/sorcerer.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 30
      },
      {
        id: 57,
        img: '../../assets/images/super-man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 21
      },
      {
        id: 58,
        img: '../../assets/images/cat-woman.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 28
      },
      {
        id: 59,
        img: '../../assets/images/man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 31
      },
      {
        id: 60,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 17
      },
      {
        id: 61,
        img: '../../assets/images/captain-america.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 32
      },
      {
        id: 62,
        img: '../../assets/images/captain-marvel.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 17
      },
      {
        id: 63,
        img: '../../assets/images/super-man.jpg',
        bg: '../../assets/images/bg.jpg',
        pairId: 21
      },
    ];
    return { playground1, playground2, playground3 };
  }
}
