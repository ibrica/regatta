import { combineReducers } from 'redux'
import regatta from './regatta'
import filter from './filter'
import show from './show'

const regattaApp = combineReducers({
  regatta,
  filter,
  show
})

export default regattaApp