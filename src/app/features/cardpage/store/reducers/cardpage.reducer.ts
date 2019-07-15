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
    case fromAction.GET_ALL_CARDS_PLAYGROUND_FIRST: {
      // debugger;
      return {...state};
    }

    case fromAction.GET_ALL_CARDS_PLAYGROUND_SECOND: {
      // debugger;
      return {...state};
    }

    case fromAction.GET_ALL_CARDS_PLAYGROUND_THIRD: {
      debugger;
      return {...state};
    }

    case fromAction.SET_ALL_CARDS: {
      // debugger;
      const newCards = action.payload;
      if(state.cards.length===0) {
        return {
          ...state,
          cards: state.cards.concat(...newCards)
        }
      } else {
        if(state.cards.length!==0){
          return {
            ...state,
            cards: [...[].concat(...newCards)]
          }
        }
        return {
          ...state,
          cards: state.cards
        }
      }

      // } else if(state.cards.length!== 0){
      //   const cardsLength = state.cards.length === 0;
      //   return {
      //     ...state,
      //     cards: cardsLength.concat(...newCards)
      //   }
      // }
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

    default:
      return state;
  }
};
