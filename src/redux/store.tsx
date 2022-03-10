import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/CartReducer';
import DateReducer from './reducers/DateReducer';
import OrderReducer from './reducers/OrderReducer';

export const rootReducer = combineReducers({
    cart: CartReducer,
    date: DateReducer,
    order: OrderReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store;