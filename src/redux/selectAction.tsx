import { SELECT_DROPDOWN } from './selectActionType'


const selectAction = (passedValue:any) => {
    console.log('act', passedValue)
    return {
    
        type: SELECT_DROPDOWN,
        payLoad: passedValue
    }
  }

export default selectAction;