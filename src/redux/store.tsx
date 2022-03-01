import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/CartReducer';
import DateReducer from './reducers/DateReducer';

const rootReducer = combineReducers({
    CartReducer,
    DateReducer,
})

const store = createStore(rootReducer)

export default store;