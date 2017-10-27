import * as CONSTANTS from '../constants'

// IDs of Regattas
let RegattaId = 0

export const goHome = () => {
  return {
    type: CONSTANTS.GO_HOME,
    display: CONSTANTS.GO_HOME,
  }
}


export const addRegatta = (name, town, country) => {
  return {
    type: CONSTANTS.ADD_REGATTA,
    id: RegattaId++,
    name,
    town,
    country
  }

}

export const toggleCountry = (country, active) => {
  return {
    type: CONSTANTS.TOGGLE_COUNTRY,
    country,
    active
  }
}

