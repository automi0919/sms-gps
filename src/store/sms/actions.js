import { createTypes } from 'redux-action-creator'
import axios from '../../api/axios'
import getSocket from '../../api/socket'
import { getWhat3words } from '../../api/what3words'
import {getSocketID} from '../../api/socket';

export const types = createTypes(['SEND_REQUEST','SEND_LOCATION', 'SET_CURRENT_GEOLOCATION', 'GET_REQUEST', 'APPROVED', 'ERROR', 'ERROR_FORMAT', 'FORMAT_REQUEST_STATE'
, 'REQUEST_FAILD','SEND_CONTACT_US'
], 'SMS')
export const REQUEST_STATE = {
  NOTSEND: 'not send',
  SENDING: 'sending',
  PENDING: 'pending',
  APPROVED: 'approved',
  FAILD: 'faild'
}
export const CONTACT_US_STATE = {
  NOTSEND: 'not send',
  SENDING: 'sending',
  DONE: 'done',
  FAILD: 'failed'
}
export const sendRequest = (from, to, name, msg) => (dispatch) => {
  dispatch({
    type: types.SEND_REQUEST,
    payload: REQUEST_STATE.SENDING
  });
  return axios.post('/send_request', {
    from,
    to,
    name,
    msg,
    socketID: getSocketID()
  }).then(result => {
    console.log('result: ', result)
    if (result.data.success) {
      dispatch({
        type: types.SEND_REQUEST,
        payload: REQUEST_STATE.PENDING
      })
    } else {
      dispatch({
        type: types.REQUEST_FAILD,
        payload: 'Your number is not available to use Twilio'
      });
    }
    
  });
}

export const sendShareRequest = (from, to, name, pos) => (dispatch) => {
  dispatch({
    type: types.SEND_REQUEST,
    payload: REQUEST_STATE.SENDING
  });
  return axios.post('/send_share_request', {
    from,
    to,
    name,
    pos
  }).then(result => {
    console.log('result: ', result)
    if (result.data.success) {
      dispatch({
        type: types.SEND_REQUEST,
        payload: REQUEST_STATE.PENDING
      })
    } else {
      dispatch({
        type: types.REQUEST_FAILD,
        payload: 'Your number is not available to use Twilio'
      })
    }
    
  });
}

export const getCurrentGeoLocation = () => {
  return (dispatch) => {
    return navigator.geolocation.getCurrentPosition( function (position) {
      getWhat3words(`${position.coords.latitude},${position.coords.longitude}`).then(what3words => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          what3words
        }
        dispatch({
          type: types.SET_CURRENT_GEOLOCATION,
          payload: pos
        })
      });
    });
  }
}

export const sendLocation = (pos, id) => (dispatch) => {
  return axios.post('/send_location', {
    pos,
    id
  }).then(result => {
    dispatch({
      type: types.SEND_LOCATION,
      payload: REQUEST_STATE.NOTSEND
    })
  });
}

export const setApprovedPos = (pos) => {
  return {
    type: types.APPROVED,
    payload: pos
  }
}

export const sendMsg = (msg) => {
  const ws = getSocket();
  if (typeof msg === 'object') {
    ws.send(JSON.stringify(msg))
  } else {
    ws.send(msg);
  }
}

export const formatRequestState = () => {
  return {
    type: types.FORMAT_REQUEST_STATE
  }
}


export const sendContactUs = (name, email, phonenumber, msg) => (dispatch) => {
  dispatch({
    type: types.SEND_CONTACT_US,
    payload: CONTACT_US_STATE.SENDING
  });
  return axios.post('/send_contact_us', {
    name,
    email,
    phonenumber,
    msg,
  }).then(result => {
    console.log('result: ', result)
    if (result.data.success) {
      dispatch({
        type: types.SEND_CONTACT_US,
        payload: CONTACT_US_STATE.DONE
      })
    } else {
      dispatch({
        type: types.SEND_CONTACT_US,
        payload: CONTACT_US_STATE.FAILD
      });
    }
  });
}

export const formatContactUs = () => {
  return {
    type: types.SEND_CONTACT_US,
    payload: CONTACT_US_STATE.NOTSEND
  }
}