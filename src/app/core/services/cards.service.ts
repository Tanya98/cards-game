import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CardPageState } from '../../features/cardpage/store/reducers/cardpage.reducer';
import { Store } from '@ngrx/store';
import * as action from '../../features/cardpage/store/actions/cardpage.action';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardsService {

  cards$: Observable<Card[]>;
  selectedCard$: Observable<Card[]>;

  constructor(private store: Store<CardPageState>) {
    this.cards$ = this.store.select((state: any) => state.cardpage.cards);
    this.selectedCard$ = this.store.select((state: any) => state.cardpage.selectedCard);
  }

  getCards(count: number) {
    return this.store.dispatch(new action.GetallCards(count));
  }

  selectedCard(card: Card) {
    return this.store.dispatch(new action.SelectOneCard(card));
  }

  deleteCards(){
    return this.store.dispatch(new action.DeleteCards());
  }

  clear(){
    return this.store.dispatch(new action.ClearAll());
  }
  win(){
    return this.store.dispatch((new action.WinAction()));
  }
}
