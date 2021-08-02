import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter, useLocation } from 'react-router-dom';
const BackIcon = ({history}:any) => {
  let location = useLocation();
  const handleBack = () => {
    let path = location.pathname;
    console.log('path: ', path);
    if (path === '/display' || path === '/send_my_location') {
      history.push('/');
    } else {
      history.goBack();
    }
  }
  return (
    <FontAwesomeIcon icon={faArrowCircleLeft} color={"var(--primary-color)"} size="2x" onClick={handleBack}/>
  )
}

export default withRouter(BackIcon);
