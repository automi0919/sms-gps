import { types, REQUEST_STATE, CONTACT_US_STATE } from './actions'

const initialState = {
  position: {},
  current_geolocation: {lat: 37, lng: 64},
  request_state: REQUEST_STATE.NOTSEND,
  requested_data: {},
  approved_data: {},
  error: '',
  contact_us_state: CONTACT_US_STATE.NOTSEND
}

const position_reducer =  (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST:
      console.log('Request State: ', payload);
      return {
        ...state,
        request_state: payload,
      }
    case types.REQUEST_FAILD:
      console.log(payload);
      return {
        ...state,
        request_state: REQUEST_STATE.FAILD,
        error: payload
      }
    case types.SET_CURRENT_GEOLOCATION:
      return {
        ...state,
        current_geolocation: payload
      };
    case types.SEND_LOCATION:
      return {
        ...state,
        request_state: payload,
    }
    case types.GET_REQUEST:
      return {
        ...state,
        requested_data: payload,
      }
    case types.APPROVED:
      return {
        ...state,
        approved_data: payload,
        request_state: types.APPROVED
      }
    case types.FORMAT_REQUEST_STATE:
      return {
        ...state,
        request_state: REQUEST_STATE.NOTSEND,
        error: ''
      }
    case types.SEND_CONTACT_US:
      return {
        ...state,
        contact_us_state:payload
      }
    default:
      return state;
  }
}

export default position_reducer;

export function getPosition(state) {
  return state.sms.position;
}

export function getRequestState(state) {
  return state.sms.request_state;
}

export function currentGeoLocation(state) {
  return state.sms.current_geolocation;
}

export function requestedData(state) {
  return state.sms.requested_data;
}

export function approvedData(state) {
  return state.sms.approved_data;
}

export function getErrorMessage(state) {
  return state.sms.error;
}

export function getContactUsState(state) {
  return state.sms.contact_us_state;
}