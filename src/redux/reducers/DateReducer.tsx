const INITIAL_STATE = {
    days: 0,
}

function AddCartReducer(state = INITIAL_STATE, action: any)  {
    
    switch(action.type) {
        case 'adddays': {
            return {
                ...state,
                days: action.payload
            }
        }
    }
    
    return state
}

export default AddCartReducer