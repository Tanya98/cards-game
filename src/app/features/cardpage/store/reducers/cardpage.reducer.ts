import { Card } from '../../../../core/models/card';
import * as fromAction from '../actions/index';

export interface CardPageState {
  cards: Card[];
  selectedCard: Card;
  checkCard: Card;
}

export const cardPageInitialState: CardPageState = {
  cards: [],
  selectedCard: null,
  checkCard: null,
};

export const cardpageReducer = (state = cardPageInitialState, action: fromAction.Action) => {

  switch (action.type) {
    case fromAction.GET_ALL_CARDS: {
      return { ...state };
    }

    case fromAction.SET_ALL_CARDS: {
      const newCards = action.payload;
      return {
        ...state,
        cards: state.cards.length === 0 ? [...state.cards.concat(...newCards)] : state.cards,
      };
    }

    case fromAction.SELECTED_ONE_CARD: {
      const selectedCard = action.payload;
      return {
        ...state,
        selectedCard: state.selectedCard = selectedCard
      };
    }

    case fromAction.CHECK_CARD: {
      // debugger;
      const card = action.payload;
      const identicalCards = state.selectedCard = state.checkCard;
      return {
        ...state,
        checkCard: state.checkCard = card,
        cards: identicalCards ? [...state.cards.slice(identicalCards.pairId)] : state.cards
      };
    }

    // case fromAction.REMOVE_TWO_CARDS: {
    //   // const pairId = action.payload;
    //   return {
    //     ...state,
    //     checkCard: state.checkCard.forEach(pairId => {
    //       if (pairId.pairId === pairId.pairId) {
    //         return state.cards.slice(pairId.pairId);
    //       }
    //       return state.cards;
    //     })
    //   };
    // }
    default:
      return state;
  }
};
