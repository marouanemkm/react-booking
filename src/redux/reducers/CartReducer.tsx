interface CartState {
    hotelName: string,
    hotelPrice: number,
    showName: string,
    showPrice: number,
}

const INITIAL_STATE: CartState = {
    hotelName: '',
    hotelPrice: 0,
    showName: '',
    showPrice: 0,
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
    }
    
    return state;
}

export default CartReducer;