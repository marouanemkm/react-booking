interface DateState {
    nights: number,
    startDate: any,
    endDate: any,
}

const INITIAL_STATE: DateState = {
    nights: 0,
    startDate: '',
    endDate: '',
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