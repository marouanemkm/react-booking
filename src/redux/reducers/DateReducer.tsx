import { DateState } from "../../types";

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
                nights: action.nights,
                startDate: action.startDate,
                endDate: action.endDate,
            }
        }
    }

    return state;
}

export default DateReducer;