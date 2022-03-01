const INITIAL_STATE = {
    cart: 0
}

function CartReducer(state = INITIAL_STATE, action: any)  {
    
    switch(action.type) {
        case 'ADDCART': {
            return {
                ...state,
                cart: action.payload
            }
        }
    }
    
    return state;
}

export default CartReducer;