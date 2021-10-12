import { SELECT_DROPDOWN } from './selectActionType'


const initialState = {
    selectedValue: []
}

const selectReducer = (state = initialState, action: any ) => {
    switch(action.type) {
        case SELECT_DROPDOWN:
            console.log('action',action);
            return {
                    ...state,
                    selectedValue: action.payLoad
                 }
        default: return state    
    }   
}
export default selectReducer;