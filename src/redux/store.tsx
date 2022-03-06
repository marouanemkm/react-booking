import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/CartReducer';
import DateReducer from './reducers/DateReducer';

export const rootReducer = combineReducers({
    cart: CartReducer,
    date: DateReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store;