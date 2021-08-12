import './SendLocation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  REQUEST_STATE,
  sendRequest,
  formatRequestState,
} from '../../store/sms/actions'
import Layout from '../../pages/Layout'
import Panel from '../Panel/Panel'
import OnboardingTextInput from '../common/OnboardingTextInput/OnboardingTextInput'
import OnboardingButton from '../common/OnboardingButton/OnboardingButton'
import { useHistory } from 'react-router-dom'
import { getErrorMessage, getRequestState } from '../../store/sms/reducer'

function SendLocation(props) {
  const dispatch = useDispatch()
  const [fromName, setfromName] = useState('')
  const [from, setFromNumber] = useState('')
  const [to, setToNumber] = useState('')
  const [msg, setMsg] = useState('')
  const history = useHistory()
  const error = useSelector((state) => getErrorMessage(state))
  const request_state = useSelector((state) => getRequestState(state))

  useEffect(() => {
    dispatch(formatRequestState());
  }, [])
  console.log('_error: ', error)
  if (request_state === REQUEST_STATE.PENDING) {
    props.handleNotification(
      'success',
      'Your request has been sent successfully'
    )
    history.push('/pending')
    dispatch(formatRequestState())
  } else if (request_state === REQUEST_STATE.FAILD) {
    console.log('error: ', error)
    props.handleNotification('error', error)
    dispatch(formatRequestState())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendRequest(from, to, fromName, msg))
  }

  return (
    <Panel>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <OnboardingTextInput
            type='text'
            placeholder='YOUR MOBILE NUMBER*'
            value={from}
            onChange={setFromNumber}
            required={true}
            mask="+6\1 999 999 999"
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
          <OnboardingTextInput
            type='text'
            placeholder='MESSAGE(OPTIONAL)'
            value={msg}
            onChange={setMsg}
          />
          <div className='btn-wrapper'>
            <OnboardingButton
              fill={true}
              type='submit'
              loading={request_state === REQUEST_STATE.SENDING}
            >
              SEND SMS GPS REQUEST
            </OnboardingButton>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default SendLocation
