import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../../../../core/services/data.service';
import * as fromAction from '../actions/cardpage.action';
import { map, switchMap, tap, take, concatMap, withLatestFrom, filter } from 'rxjs/operators';
import { Card } from '../../../../core/models/card';
import { Store } from '@ngrx/store';
import { CardPageState } from '../reducers/cardpage.reducer';

export class CardpageEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<CardPageState>
  ) { }

  @Effect()
  loadPlayground$ = this.actions$.pipe(
    ofType(fromAction.GET_ALL_CARDS),
    switchMap((action: fromAction.GetallCards) => {
      return this.dataService.getCards()
        .pipe(
          map((cards: Card[]) => {
            const takeCards = cards.slice(0, action.count);
            return new fromAction.SetCards(takeCards);
          })
        );
    })
  );

  @Effect()
  selectCard$ = this.actions$.pipe(
    ofType(fromAction.SELECTED_ONE_CARD),
    withLatestFrom(this.store),
    map(([action, state]) => {

      if (state.selectedCard == null) {
        return new fromAction.SetOneCard(action.card);
      } else {
        return new fromAction.TryMatchCardsAction(action.card);
      }
    }));

  @Effect()
  tryMatch$ = this.actions$.pipe(
    ofType(fromAction.TRY_MATCH_CARDS),
    withLatestFrom(this.store),
    map(([action, state]) => {

      if (state.selectedCard.pairId === action.card.pairId) {
        return new fromAction.MatchCardsSuccessAction(state.selectedCard.pairId);
      } else {
        return new fromAction.MatchCardsFailedAction();
      }
    }));

  @Effect()
  matchSucces$ = this.actions$.pipe(
    ofType(fromAction.MATCH_CARDS_SUCCESS),
    withLatestFrom(this.store),
    map(([action, state]) => {
      if (state.cards.length === 2) {
          return new fromAction.WinAction();
      }
    }));

  @Effect()
  win$ = this.actions$.pipe(
    ofType(fromAction.TRY_MATCH_CARDS),
    map(() => {

    }));
}
