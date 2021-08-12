import OnboardingButton from '../common/OnboardingButton/OnboardingButton'
import Panel from '../Panel/Panel'
import './Pending.css'

function Pending(props) {
  return (
    <Panel>
      <div className='approval-container'>
        <OnboardingButton type="button" fill={true}>GPS LOCATION PENDING APPROVAL</OnboardingButton>
        <p>
          THIS SCREEN WILL AUTOMATICALLY UPDATE WHEN YOUR SMS REQUEST IS OPENED
          AND ACCEPTED
        </p>
      </div>
    </Panel>
  )
}

export default Pending
