const INITIAL_STATE = {
    nights: 0,
}

function DateReducer(state = INITIAL_STATE, action: any)  {
    
    switch(action.type) {
        case 'addnights': {
            return {
                ...state,
                nights: action.payload
            }
        }
    }
    
    return state;
}

export default DateReducer;