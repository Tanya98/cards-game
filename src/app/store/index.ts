import { cardpageReducer } from '../features/cardpage/store/reducers/cardpage.reducer';
export const rootReducer = () => {
    return {
        card: cardpageReducer,
    };
};
