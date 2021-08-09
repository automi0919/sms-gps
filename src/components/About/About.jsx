import Panel from '../Panel/Panel'
import './about.css'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'

function About(props) {
  return (
    <Panel>
      <div className='privacy-container'>
          <h2 className='title'>About</h2>
          <article>
            <p>
              <strong>SAFE LOCATE</strong> is a simple <strong>NO APP & 2 TAP</strong> way of
              requesting or sharing a location via SMS. A request link is sent to
              a user's phone via SMS, the receiver simply taps the link and taps <strong>ALLOW GPS</strong> on their phone and their location is sent back to the
              requesting person or party.
            </p>
          </article>
          <article>
            <p>
              <strong>SAFE LOCATE</strong> was a result of being first on the
              scene at an accident 2 weeks ago and the man died in my arms. <strong>One of
              the biggest</strong> issues was that the emergency services arrived 5-10
              minutes late after driving past the location <strong>TWICE</strong>!
            </p>
          </article>
          <article>
            <p>
              Initially, SL has been launched for <strong>FREE</strong> private use when trying to
              locate a loved on when they have been involved in an incident, when
              lost or to provide peace of mind. We will then be launching our
              commercial offering which open up live location requests for
              emergency services, client and employee tracking for businesses such
              as insurance, roadside assist, delivery services etc.
            </p>
          </article>
          <article>
            <p>
              <strong>HUGH CAMPBELL</strong>
              <br /> FOUNDER
            </p>
          </article>
      </div>
    </Panel>
  )
}

export default About
