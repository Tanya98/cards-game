import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Card } from '../../core/models/card';
import { map, takeUntil } from 'rxjs/operators';
import { LoginComponent } from "../account/login/login.component";

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})
export class CardpageComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  cards: Card[];
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
      map((cards) => {
        this.cards = cards;
        if (this.cards.length === 0) {
          this.stopTimer();
          this.countTicks();
        }
      })
    ).subscribe();
  }

  ngOnInit() {
    this.choosePlaygroundFirst();
    this.startTimer();
  }

  selectCard(card: Card) {
    setTimeout(() => {
      return this.cardsService.selectedCard(card);
    }, 700);
  }

  choosePlaygroundFirst() {
    this.cardsService.getAllCardsPlaygroundFirst();
    this.stopTimer();
    this.countTicks();
    this.startTimer();
  }

  choosePlaygroundSecond() {
    // debugger;
    this.cardsService.getAllCardsPlaygroundSecond();
    this.stopTimer();
    this.startTimer();
  }

  choosePlaygroundThird() {
    // debugger;
    this.cardsService.getAllCardsPlaygroundThird();
    this.stopTimer();
    this.startTimer();
  }

  addClass(card) {
    this.activeCard = card;
  }

  startTimer() {
    this.stream = interval(1000);
    this.timerSubscription = this.stream.pipe(
      takeUntil(this.stopPlay$),
    ).subscribe(v => this.timer = v);
  }

  stopTimer() {
    // console.log(this.timer);
    this.stopPlay$.next();
    this.countTicks();
    this.timer = 0;
  }

  ngOnDestroy() {
    // this.stopTimer();
    this.timerSubscription.unsubscribe();
    this.cardsSubscription.unsubscribe();
  }

  countTicks() {
    let userInfo = localStorage.getItem('userInfo');
    let info = JSON.parse(userInfo);
    if (this.timer !== 0) {
      info.timer = this.timer;
      let user = JSON.stringify(info);
      localStorage.setItem('userInfo', user);
      console.log(user);
    }
  }
}
