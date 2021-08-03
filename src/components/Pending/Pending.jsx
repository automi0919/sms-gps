import Panel from '../Panel/Panel'
import './Pending.css'

function Pending(props) {
  return (
    <Panel>
      <div className='approval-container'>
        <p>GPS location pending approval..</p>
        <img src='./logo.svg' alt='Pending...' />
        <p>
          THIS SCREEN WILL AUTOMATICALLY UPDATE WHEN YOUR SMS REQUEST IS OPENED
          AND ACCEPTED
        </p>
      </div>
    </Panel>
  )
}

export default Pending
