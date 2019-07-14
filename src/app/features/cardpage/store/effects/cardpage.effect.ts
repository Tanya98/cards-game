import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../../../../core/services/data.service';
import * as fromAction from '../actions/cardpage.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { Card } from '../../../../core/models/card';
import { CardsService } from 'src/app/core/services/cards.service';

export class CardpageEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private cardsService: CardsService
  ) { }

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(fromAction.GET_ALL_CARDS),
    switchMap(() => {
      return this.dataService.getPlayground1()
        .pipe(
          map((cards: Card[]) => new fromAction.SetallCards(cards))
        );
    })
  );

  // @Effect()
  // selectCard$ = this.actions$.pipe(
  //   ofType(fromAction.SELECTED_ONE_CARD),
  //   map((card) => {
  //     // debugger;
  //     return new fromAction.CheckCard(card);
  //   })
  // );


  // @Effect()
  // removeCards$ = this.actions$.pipe(
  //   ofType(fromAction.REMOVE_TWO_CARDS),
  //   switchMap((id: number) => {
  //     return this.cardsService.remove(id)
  //     // .pipe(map(() => new fromAction.GetallCards()));
  //   })
  // )
}
