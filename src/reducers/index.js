import { combineReducers } from 'redux'
import regattas from './regattas'
import filters from './filter'

const regattaApp = combineReducers({
  regattas,
  filters
})

export default regattaApp