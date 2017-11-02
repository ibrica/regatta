import * as CONSTANTS from '../constants'

// IDs of Regattas
let RegattaId = 1

export const goHome = () => {
  return {
    type: CONSTANTS.SHOW_HOME
  }
}

export const goDetail = () => {
  return {
    type: CONSTANTS.SHOW_DETAIL
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

