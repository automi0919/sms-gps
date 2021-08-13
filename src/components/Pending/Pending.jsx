import OnboardingButton from '../common/OnboardingButton/OnboardingButton'
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox'
import Panel from '../Panel/Panel'
import './Pending.css'

function Pending(props) {
  return (
    <Panel>
      <div className='approval-container'>
        <OnboardingInfoBox  fill={true} color={"orange"} width="80%" padding={"5px"}>
          <span style={{fontSize: "12px"}}>
            GPS LOCATION PENDING APPROVAL
          </span>
        </OnboardingInfoBox>
        <p>
          THIS SCREEN WILL AUTOMATICALLY UPDATE WHEN YOUR SMS REQUEST IS OPENED
          AND ACCEPTED
        </p>
      </div>
    </Panel>
  )
}

export default Pending
