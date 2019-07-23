import { Component, OnInit, OnDestroy, ViewChild, DoCheck, AfterViewInit, TemplateRef } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Card } from '../../core/models/card';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { User } from '../../core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})

export class CardpageComponent implements OnInit, OnDestroy {
  public cards$: Observable<Card[]>;
  public selectedCards$: Observable<Card[]>;
  public cards: Card[];
  public activeCard: Card;
  public hasFlippedCard: boolean = false;
  public timer: number = 0;
  public stream: Observable<any>;
  public currentMode: number;
  public timerSubscription: Subscription;
  public cardsSubscription: Subscription;
  public selectedCardsSubscription: Subscription;
  public stopPlay$: Subject<any> = new Subject();
  public _4X4: number = 4; // 16
  public _6X6: number = 6; // 36
  public _8X8: number = 8; // 64
  public cellWidth: number = 130;
  public playgroundSize: number = 4;

  constructor(private cardsService: CardsService, private router: Router) {

    this.cards$ = this.cardsService.cards$;
    this.selectedCards$ = this.cardsService.selectedCard$;
    this.cardsSubscription = this.cards$.pipe(
      tap((cards) => {
        this.cards = cards;
        if (!this.cards.length) {
          this.stopTimer();
        }
      })
    ).subscribe();
  }

  ngOnInit() {
    this.cardsService.getCards(this._4X4 * this._4X4);
    this.changeMode();
    this.currentMode = this._4X4;

    this.selectedCardsSubscription = this.selectedCards$.pipe(
      filter(sl => !!sl[0] && !!sl[1])
    ).subscribe(sl => {
      if (sl[0].pairId === sl[1].pairId && sl[0].id !== sl[1].id) {
        return this.cardsService.deleteCards();
      } else {
        return this.cardsService.clear();
      }
    });
  }

  selectCard(card: Card) {
    setTimeout(() => {
      return this.cardsService.selectedCard(card);
    }, 700);
  }

  changeModeEventHandler(mode: number) {
    this.currentMode = mode;
    this.playgroundSize = mode;
    this.cardsService.getCards(mode * mode);
    this.changeMode();
  }

  changeMode() {
    this.stopTimer();
    this.countTicks();
    this.startTimer();
  }

  showCongrat() {
    return this.router.navigate(['/congratulation']);
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
    this.cardsSubscription.unsubscribe();
    this.selectedCardsSubscription.unsubscribe();
  }

  countTicks() {
    const userInfo = localStorage.getItem('userInfo');
    const info: User = JSON.parse(userInfo);
    if (this.timer !== 0) {
      // debugger;
      if (this.currentMode === this._4X4 && this.cards.length === 0) {
        info.timerPlaygroundFirst = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
        this.addUser();
        // this.showCongrat();
      }

      if (this.currentMode === this._6X6 && this.cards.length === 0) {
        // debugger;
        info.timerPlaygroundSecond = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
        this.addUser();

        // this.showCongrat();
      }

      if (this.currentMode === this._8X8 && this.cards.length === 0) {
        // debugger;
        info.timerPlaygroundThird = this.timer;
        const user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
        this.addUser();
        // this.showCongrat();
      }
    }
  }

  addUser() {
    const getUser: User = JSON.parse(localStorage.getItem('userInfo'));
    const getAllInfo = JSON.parse(localStorage.getItem('allInfo'));

    if (getAllInfo.length === 0 && getUser.timerPlaygroundFirst ||
      getAllInfo.length === 0 && getUser.timerPlaygroundSecond ||
      getAllInfo.length === 0 && getUser.timerPlaygroundThird) {
      debugger;
      getAllInfo.push(getUser);
      const newInfo = JSON.stringify(getAllInfo);
      localStorage.setItem('allInfo', newInfo);
      this.showCongrat();
    }

    getAllInfo.forEach(user => {
      if (user.email === getUser.email) {
        debugger;
        const deleteUser = getAllInfo.filter(x => x.email !== getUser.email);
        deleteUser.push(getUser);
        const newUser = JSON.stringify(deleteUser);
        localStorage.setItem('allInfo', newUser);
      }
      if (user.email !== getUser.email) {
        debugger;
        getAllInfo.push(getUser);
        const newUser = JSON.stringify(getAllInfo);
        localStorage.setItem('allInfo', newUser);
        this.showCongrat();

      }
    });
  }
}
