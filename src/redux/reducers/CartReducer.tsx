const INITIAL_STATE = {
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action: any)  {
    
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

export default AddCartReducer;