import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../../../../core/services/data.service';
import * as fromAction from '../actions/cardpage.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { Card } from '../../../../core/models/card';

export class CardpageEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) { }

  @Effect()
  loadCardsPlaygroundOne$ = this.actions$.pipe(
    ofType(fromAction.GET_ALL_CARDS),
    switchMap(() => {
      return this.dataService.getCards()
        .pipe(
          map((cards: Card[]) => new fromAction.SetallCards(cards))
        );
    })
  );

  // @Effect()
  // loadCardsPlaygroundTwo$ = this.actions$.pipe(
  //   ofType(fromAction.GET_ALL_CARDS_PLAYGROUND_SECOND),
  //   switchMap(() => {
  //     return this.dataService.getPlayground2()
  //       .pipe(
  //         map((cards: Card[]) => new fromAction.SetallCards(cards))
  //       );
  //   })
  // );
  //
  // @Effect()
  // loadCardsPlaygroundThree$ = this.actions$.pipe(
  //   ofType(fromAction.GET_ALL_CARDS_PLAYGROUND_THIRD),
  //   switchMap(() => {
  //     return this.dataService.getPlayground3()
  //       .pipe(
  //         map((cards: Card[]) => new fromAction.SetallCards(cards))
  //       );
  //   })
  // );
}
