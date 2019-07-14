import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CardPageState } from '../../features/cardpage/store/reducers/cardpage.reducer';
import { Store } from '@ngrx/store';
import * as action from '../../features/cardpage/store/actions/cardpage.action';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardsService {

  cards$: Observable<Card[]>;
  selectedCard$: Observable<Card>;
  checkCard$: Observable<Card[]>;

  constructor(private store: Store<CardPageState>) {
    this.cards$ = this.store.select((state: any) => state.cardpage.cards);
    this.selectedCard$ = this.store.select((state: any) => state.cardpage.selectedCard);
    this.checkCard$ = this.store.select((state: any) => state.cardpage.checkCard);
  }

  getAllCards() {
    return this.store.dispatch(new action.GetallCards());
  }

  selectedCard(card: Card) {
    return this.store.dispatch(new action.SelectedOneCard(card));
  }
  // remove(id: number) {
  //   this.store.dispatch(new action.RemoveTwoCards(id));
  //   this.getAllCards();
  // }
}
