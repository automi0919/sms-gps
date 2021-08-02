import Panel from '../Panel/Panel'
import './about.css'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <Panel>
      <div className="privacy-container">
        <h3 className="title">About</h3>
        <p>Sorry. This is not developed yet</p>
      </div>
    </Panel>
  )
}

export default About;
