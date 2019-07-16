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
    case fromAction.GET_ALL_CARDS_PLAYGROUND_FIRST: {
      // debugger;
      return { ...state };
    }

    case fromAction.GET_ALL_CARDS_PLAYGROUND_SECOND: {
      // debugger;
      return { ...state };
    }

    case fromAction.GET_ALL_CARDS_PLAYGROUND_THIRD: {
      // debugger;
      return { ...state };
    }

    case fromAction.SET_ALL_CARDS: {
      // debugger;
      const newCards = action.payload;
      if (state.cards.length === 0) {
        return {
          ...state,
          cards: state.cards.concat(...newCards)
        };
      } else {
        if (state.cards.length !== 0) {
          return {
            ...state,
            cards: [...[].concat(...newCards)]
          };
        }
        return {
          ...state,
          cards: state.cards
        };
      }
    }

    case fromAction.SELECTED_ONE_CARD: {
      const card = action.payload;
      const selectedCard = state.selectedCard;

      if (selectedCard === null) {
        return {
          ...state,
          selectedCard: card
        };
      } else {
        if (selectedCard.pairId === card.pairId) {
          const cards = state.cards.filter(x => x.pairId !== selectedCard.pairId);
          return {
            ...state,
            selectedCard: null,
            cards: [...cards]
          };
        }
        return {
          ...state,
          selectedCard: null,
        };
      }
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
