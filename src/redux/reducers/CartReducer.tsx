import { CartState } from "../../types";

const INITIAL_STATE: CartState = {
    hotelName: '',
    hotelPrice: 0,
    showName: '',
    showPrice: 0,
    totalPrice: 0
}

function CartReducer(state = INITIAL_STATE, action: any)  {
    
    switch(action.type) {
        case 'addhotel': {
            return {
                ...state,
                hotelName: action.hotelName,
                hotelPrice: action.hotelPrice,
            }
        }
        case 'addshow': {
            return {
                ...state,
                showName: action.showName,
                showPrice: action.showPrice,
            }
        }
        case 'addtotalprice': {
            return {
                ...state,
                totalPrice: action.totalPrice
            }
        }
    }
    
    return state;
}

export default CartReducer;