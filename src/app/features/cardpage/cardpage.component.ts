import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { Observable } from 'rxjs';
import { Card } from '../../core/models/card';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})
export class CardpageComponent implements OnInit {
  cards$: Observable<Card[]>;
  selectedCard$: Observable<Card>;
  checkCard$: Observable<Card[]>;

  constructor(private cardsService: CardsService) {
    this.cards$ = this.cardsService.cards$;
    this.cards$.subscribe(v => console.log(v));
    this.selectedCard$ = this.cardsService.selectedCard$;
    this.selectedCard$.subscribe(v => console.log(v));

    this.checkCard$ = this.cardsService.checkCard$;
    this.checkCard$.subscribe(v => console.log(v));
  }

  ngOnInit(): void {
    this.cardsService.getAllCards();
  }

  selectCard(card: Card) {
    // debugger;
    return this.cardsService.selectedCard(card);
  }
}
