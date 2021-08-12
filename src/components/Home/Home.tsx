import './home.css'
import OnboardingButton from '../common/OnboardingButton/OnboardingButton';
import Panel from '../Panel/Panel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentGeoLocation } from '../../store/sms/actions';

const Home = (props: any) => {
  const dispatch = useDispatch();
  dispatch(getCurrentGeoLocation());

  return (
    <Panel>
      <div className="wrapper">
        <div className="btn-group">
          <Link to="/request"><OnboardingButton fill={true}>REQUEST A GPS LOCATION VIA SMS</OnboardingButton></Link>
          <Link to="/send_my_location"><OnboardingButton fill={true}>SEND MY GPS LOCATION VIA SMS</OnboardingButton></Link>
          <Link to="/help"><OnboardingButton fill={false}>HOW TO SAFE LOCATE</OnboardingButton></Link>
          {/* <Link to="/donate"><OnboardingButton fill={false}>SPNSORS & DONATE</OnboardingButton></Link> */}
          <Link to="/about"><OnboardingButton fill={false}>ABOUT SAFE LOCATE</OnboardingButton></Link>
          <Link to="/contact-us"><OnboardingButton fill={false}>CONTACT</OnboardingButton></Link>
        </div>
      </div>
    </Panel>
  )
}

export default Home