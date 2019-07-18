import { Card } from '../../../../core/models/card';
import * as fromAction from '../actions/index';

export interface CardPageState {
  cards: Card[];
  selectedCard: Card;
  showText: string;
}

export const cardPageInitialState: CardPageState = {
  cards: [],
  selectedCard: null,
  showText: '',
};

export const cardpageReducer = (state = cardPageInitialState, action: fromAction.Action) => {

  switch (action.type) {

    case fromAction.SET_ALL_CARDS: {
      return {
        ...state,
        cards: [...action.payload]
      };
    }

    case fromAction.SET_ONE_CARD: {
      return {
        ...state,
        selectedCard: action.card
      };
    }

    case fromAction.TRY_MATCH_CARDS: {
      return {
        ...state,
        selectedCard: null
      };
    }

    case fromAction.MATCH_CARDS_SUCCESS: {
      return {
        ...state,
        cards: state.cards.filter(x => x.pairId !== action.pairId),
        selectedCard: null
      };
    }

    case fromAction.MATCH_CARDS_FAILED: {
      return {
        ...state,
        selectedCard: null
      };
    }

    // case fromAction.SHOW_TEXT:{
    //   // let text = action.payload;
    //   return {
    //     ...state,
    //     showText: alert(action.payload),
    //   }
    // }

    default:
      return state;
  }
};
