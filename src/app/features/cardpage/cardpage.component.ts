import {Component, OnInit, OnDestroy, ViewChild, DoCheck, AfterViewInit} from '@angular/core';
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
  playground:Card[];
  activeCard: Card;
  timer: number = 0;
  stream: Observable<any>;
  timerSubscription: Subscription;
  cardsSubscription: Subscription;
  stopPlay$: Subject<any> = new Subject();

  constructor(
    private cardsService: CardsService
  ) {
    // this.cardsService.getAllCards();
    this.cards$ = this.cardsService.cards$;
    this.cardsSubscription = this.cards$.pipe(
      map((cards) => {
        this.cards = cards;
        // console.log(this.cards);
        if (this.cards.length === 0) {
          this.stopTimer();
          this.countTicks();
        }
      })
    ).subscribe();
  }

  ngOnInit() {
    this.choosePlaygroundFirst();
  }

  selectCard(card: Card) {
    // debugger;
    setTimeout(() => {
      return this.cardsService.selectedCard(card);
    }, 700);
  }

  choosePlaygroundFirst() {
    this.cardsService.getAllCards();
    this.playground = this.cards.slice(0,16);
    this.stopTimer();
    this.countTicks();
    this.startTimer();
  }

  choosePlaygroundSecond() {
    // this.cardsService.getAllCards();
    this.playground = this.cards.slice(0,36);
    this.stopTimer();
    this.startTimer();
  }

  choosePlaygroundThird() {
    // this.cardsService.getAllCards();
    this.playground = this.cards.slice(0,64);
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
    this.stopPlay$.next();
    this.countTicks();
    this.timer = 0;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    this.cardsSubscription.unsubscribe();
  }

  countTicks() {
    let userInfo = localStorage.getItem('userInfo');
    let info = JSON.parse(userInfo);
    if (this.timer !== 0) {

      if(this.cards.length === 16){
        info.timerPlaygroundFirst = this.timer;
        let user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
      }

      if(this.cards.length === 36){
        info.timerPlaygroundSecond = this.timer;
        let user = JSON.stringify(info);
        localStorage.setItem('userInfo', user);
      }

      if(this.cards.length === 64){
        info.timerPlaygroundThird = this.timer;
        let user = JSON.stringify(info);
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
      if(user.email === getUser.email){
        let deleteUser = getAllInfo.filter(x=>x.email !== getUser.email);
        deleteUser.push(getUser);
        let newUser = JSON.stringify(deleteUser);
        localStorage.setItem('allInfo', newUser);
      }
      if(user.email!==getUser.email){
        getAllInfo.push(getUser);
        let newUser = JSON.stringify(getAllInfo);
        localStorage.setItem('allInfo', newUser);
      }
    })
  }
}
