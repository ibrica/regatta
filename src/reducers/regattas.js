import * as CONSTANTS from '../constants'

const regattas = (state = [], action) => {
    switch (action.type) {
      case CONSTANTS.ADD_REGATTA:
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            town: action.town,
            country: action.country
          }
        ]

      default:
        return state
    }
  }
  
  export default regattas