import * as CONSTANTS from '../constants'

const filter = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.TOGGLE_COUNTRY:
            if (action.label === 'All'){
                return action.active ? ['Croatia', 'Italy','France']:[]  //TODO: Remove hardcoding
            } else if (['Croatia', 'Italy','France'].includes(action.label)) {
                let list = state.slice(0)  //Immutability, clone array
                action.active ? list.push(action.country) : list.splice(list.indexOf(action.country),1) //add or remove country
                return list
            } else {
                return state
            }

        case CONSTANTS.GET_COUNTRIES:
            return state

        default:
            return state
    }
  }
  
  export default filter