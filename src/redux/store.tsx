import { createStore } from 'redux';
import CartReducer from './reducers/CartReducer';

const store = createStore(CartReducer)

export default store;