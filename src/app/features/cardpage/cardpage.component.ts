import {Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { Observable } from 'rxjs';
import { Card } from '../../core/models/card';
import {filter, map} from 'rxjs/operators';
import {DataService} from "../../core/services/data.service";

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})
export class CardpageComponent implements OnInit {
  cards$: Observable<Card[]>;
  multidimentionalArray = [];
  text:string ="You're a winner!";
  cards: Card[];
  activeCard: Card;

  constructor(
    private cardsService: CardsService
  ) {
    this.cards$ = this.cardsService.cards$;
    this.cards$.pipe(
      map((cards) => {
        // debugger;
        if(cards.length == 2){
          return this.cardsService.showText(this.text);
        }
      })
    ).subscribe();
    console.log(this.cards);
  }

  ngOnInit(): void {
    this.choosePlaygroundFirst();
    // if(this.cards.length==2){
    //   return this.cardsService.showText(this.text);
    // }
    // console.log(this.cards);

  }

  selectCard(card: Card) {
    setTimeout(()=>{
      return this.cardsService.selectedCard(card);
    },700)
  }

  choosePlaygroundFirst() {
    return this.cardsService.getAllCardsPlaygroundFirst();
  }

  choosePlaygroundSecond() {
    // debugger;
    return this.cardsService.getAllCardsPlaygroundSecond();
  }

  choosePlaygroundThird() {
    // debugger;
    return this.cardsService.getAllCardsPlaygroundThird();
  }

  addClass(card) {
    this.activeCard = card;
  }
}
