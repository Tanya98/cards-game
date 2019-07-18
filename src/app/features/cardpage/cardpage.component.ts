import { Component, OnInit, OnDestroy, ViewChild, DoCheck, AfterViewInit } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Card } from '../../core/models/card';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})
export class CardpageComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  cards: Card[];
  playground: Card[];
  activeCard: Card;
  timer: number = 0;
  stream: Observable<any>;
  timerSubscription: Subscription;
  cardsSubscription: Subscription;
  stopPlay$: Subject<any> = new Subject();

  constructor(
    private cardsService: CardsService
  ) {
    this.cards$ = this.cardsService.cards$;
    this.cardsSubscription = this.cards$.pipe(
      tap((cards) => {
        this.cards = cards;
        if (this.cards.length === 0) {
          this.stopTimer();
          this.countTicks();
        }
      })
    ).subscribe();
  }

  ngOnInit() {
    this.easyMode();
  }

  selectCard(card: Card) {
    setTimeout(() => {
      return this.cardsService.selectedCard(card);
    }, 700);
  }

  easyMode() {
    const _4X4 = 16;
    this.cardsService.getCards(_4X4);
    this.changeMode();
  }

  mediumMode() {
    const _6X6 = 36;
    this.cardsService.getCards(_6X6);
    this.changeMode();
  }

  hardMode() {
    const _8X8 = 64;
    this.cardsService.getCards(_8X8);
    this.changeMode();
  }

  changeMode(){
    this.stopTimer();
    this.countTicks();
    this.startTimer();
  }

  addClass(card) {
    this.activeCard = card;
  }

  startTimer() {
    this.stream = interval(1000);
    this.stream.pipe(
      takeUntil(this.stopPlay$),
    ).subscribe(v => this.timer = v);
  }

  stopTimer() {
    this.stopPlay$.next();
    this.countTicks();
    this.timer = 0;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    this.cardsSubscription.unsubscribe();
  }

  countTicks() {
    const userInfo = localStorage.getItem('userInfo');
    const info = JSON.parse(userInfo);
    if (this.timer !== 0) {

      if (this.cards.length === 16) {
        info.timerPlaygroundFirst = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
      }

      if (this.cards.length === 36) {
        info.timerPlaygroundSecond = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
      }

      if (this.cards.length === 64) {
        info.timerPlaygroundThird = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
      }
      this.addUser();
    }
  }

  addUser() {
    debugger;
    let getUser = JSON.parse(localStorage.getItem('userInfo'));
    let getAllInfo = JSON.parse(localStorage.getItem('allInfo'));

    if (getAllInfo.length === 0) {
      getAllInfo.push(getUser);
      let newUser = JSON.stringify(getAllInfo);
      localStorage.setItem('allInfo', newUser);
    }

    getAllInfo.forEach(user => {
      if (user.email === getUser.email) {
        let deleteUser = getAllInfo.filter(x => x.email !== getUser.email);
        deleteUser.push(getUser);
        let newUser = JSON.stringify(deleteUser);
        localStorage.setItem('allInfo', newUser);
      }
      if (user.email !== getUser.email) {
        getAllInfo.push(getUser);
        let newUser = JSON.stringify(getAllInfo);
        localStorage.setItem('allInfo', newUser);
      }
    });
  }
}
