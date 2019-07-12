import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Card} from '../models/card';
import {HomePageState} from "../../features/homepage/store/reducers/homepage.reducer";
import {Store} from "@ngrx/store";
import * as action from '../../features/homepage/store/actions/homepage.action';

@Injectable({ providedIn: 'root' })

export class CardsService {
  public cards$: Observable<Card[]>;
  constructor(private store: Store<HomePageState>) {
    this.cards$ = this.store.select((state:any)=> state.homepage.cards);
  }

  getAllCards(){
    return this.store.dispatch(new action.GetallCards());
  }

}
