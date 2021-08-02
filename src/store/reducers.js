import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import sms from './sms/reducer'

export default function rootReducer() {
  return combineReducers({
    form,
    sms
  })
}
