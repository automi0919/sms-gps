import './SendMyLocation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  formatRequestState,
  getCurrentGeoLocation,
  REQUEST_STATE,
  sendShareRequest,
} from '../../store/sms/actions'
import Panel from '../Panel/Panel'
import OnboardingTextInput from '../common/OnboardingTextInput/OnboardingTextInput'
import OnboardingButton from '../common/OnboardingButton/OnboardingButton'
import { useHistory } from 'react-router-dom'
import {
  currentGeoLocation,
  getErrorMessage,
  getRequestState,
} from '../../store/sms/reducer'
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox'

function SendMyLocation(props) {
  const dispatch = useDispatch()
  const [fromName, setfromName] = useState('')
  const [from, setFromNumber] = useState('')
  const [to, setToNumber] = useState('')
  const history = useHistory()
  const request_state = useSelector((state) => getRequestState(state))
  const error = useSelector((state) => getErrorMessage(state))

  var pos = useSelector((state) => currentGeoLocation(state))
  useEffect(() => {
    dispatch(getCurrentGeoLocation())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendShareRequest(from, to, fromName, pos))
  }

  if (request_state === REQUEST_STATE.PENDING) {
    props.handleNotification(
      'success',
      'Your location infomation has been sent successfully.'
    )
    history.push('/')
    dispatch(formatRequestState())
  } else if (request_state === REQUEST_STATE.FAILD) {
    props.handleNotification('error', error)
    dispatch(formatRequestState())
  }

  return (
    <Panel>
      <div className='my-container'>
       <OnboardingInfoBox  fill={true} width="70%" padding={"5px"}>
          <span style={{fontSize: "12px"}}>
            { 'YOU SHARED YOUR LOCATION'}
          </span>
        </OnboardingInfoBox>
        <form className='form' onSubmit={handleSubmit}>
          <OnboardingTextInput
            type='text'
            placeholder='YOUR MOBILE NUMBER*'
            mask="+6\1 999 999 999"
            value={from}
            onChange={setFromNumber}
            required={true}
          />
          <OnboardingTextInput
            type='text'
            placeholder="RECEIVER'S MOBILE NUMBER*"
            value={to}
            onChange={setToNumber}
            required={true}
            mask="+6\1 999 999 999"
          />
          <OnboardingTextInput
            type='text'
            placeholder='YOUR NAME(OPTIONAL)'
            value={fromName}
            onChange={setfromName}
          />
          <OnboardingInfoBox>
            <div className='info'>
              <span className='info-title'>GPS LOCATION</span>
              <span className='info-detail'>latitude: {pos.lng}</span>
              <span className='info-detail'>longitude: {pos.lat}</span>
            </div>
          </OnboardingInfoBox>
          <OnboardingInfoBox>
            <div className='info'>
              <span className='info-title'>WHAT3WORDS</span>
              <span className='info-detail'>{'///' + pos.what3words}</span>
            </div>
          </OnboardingInfoBox>
          <div className='btn-wrapper'>
            <OnboardingButton
              fill={true}
              type='submit'
              loading={request_state === REQUEST_STATE.SENDING}
            >
              SEND SMS GPS
            </OnboardingButton>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default SendMyLocation
