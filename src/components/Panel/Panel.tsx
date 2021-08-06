import { Link, useLocation } from 'react-router-dom';
import BackIcon from '../common/BackIcon/BackIcon';
import './panel.css'


const Panel = (props: PropsType) => {
  const location = useLocation();
  return (
    <div className='panel'>
      <div className='logo'>
        <Link to="/">
          <img src='/assets/images/logo.png' alt='Logo' srcSet='' />
          <h2 className="logo-title">safe locate</h2>
          <label className="logo-description">sms your gps</label>
        </Link>
      </div>
      <div className="content-wrapper">
        {props.children}
      </div>
      {location.pathname !== '/privacy' && <Link className="copyright-wrapper" to='/privacy'>
        <span className="privacy-link">Privacy Policy</span>
        <span>COPYRIGHT 2021</span>
      </Link>}
      {
        location.pathname !== '/' &&
        <div className="back-icon">
          <BackIcon />
        </div>
      }
    </div>
  )
}

interface PropsType {
  children: any;
  history?: any;
}
export default Panel;