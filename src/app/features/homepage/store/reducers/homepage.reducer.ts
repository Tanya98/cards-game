import {Card} from "../../../../core/models/card";
import * as fromAction from '../actions/index';
export interface HomePageState {
  cards: Card[],
}

export const homePageInitialState: HomePageState = {
  cards:[],
};

export const homepageReducer = (state = homePageInitialState, action: fromAction.Action)=>{

  switch (action.type) {
    case fromAction.GET_ALL_CARDS:{
      return {...state};
    }

    case fromAction.SET_ALL_CARDS:{
      const cards = action.payload;
      return {
        ...state,
        cards: state.cards.length === 0 ? [...state.cards.concat(...cards)] : state.cards,
      }
    }

    default:
      return state;
  }
};
