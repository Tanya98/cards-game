import {Actions, Effect, ofType} from "@ngrx/effects";
import {DataService} from "../../../../core/services/data.service";
import * as fromAction from '../actions/homepage.action';
import {map, switchMap} from "rxjs/operators";
import {Card} from "../../../../core/models/card";

export class HomepageEffect {
  constructor(private actions$: Actions, private dataService: DataService){}

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(fromAction.GET_ALL_CARDS),
    switchMap(()=>{
      return this.dataService.getPlayground1()
        .pipe(
          map((cards:Card[])=> new fromAction.SetallCards(cards))
        )
    })
  )
}
