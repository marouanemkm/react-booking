import { OrderState } from "../../types";

const INITIAL_STATE: OrderState = {
    email: '',
    firstName: '',
    lastName: '',
    adress: '',
}

function OrderReducer(state = INITIAL_STATE, action: any)  {
    
    switch(action.type) {
        case 'addorder': {
            return {
                ...state,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                adress: action.adress
            }
        }
    }
    
    return state;
}

export default OrderReducer;