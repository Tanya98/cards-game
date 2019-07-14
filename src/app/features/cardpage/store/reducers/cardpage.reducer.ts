import { Card } from '../../../../core/models/card';
import * as fromAction from '../actions/index';

export interface CardPageState {
  cards: Card[];
  selectedCard: Card;
}

export const cardPageInitialState: CardPageState = {
  cards: [],
  selectedCard: null,
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

    // case fromAction.CHECK_CARD: {
    //   // debugger;
    //   const card = action.payload;
    //   return {
    //     ...state,
    //     checkCard: state.checkCard.push(card),
    //     // cards: state.checkCard.forEach((item) => {
    //     //   if (item.pairId === item.pairId) {
    //     //     return state.cards.slice(item.pairId);
    //     //   }
    //     //   return state.checkCard.length = 0;
    //     // })
    //   };
    // }

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
