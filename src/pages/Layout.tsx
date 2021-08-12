import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Map from '../components/Map/Map';
import { getCurrentGeoLocation } from '../store/sms/actions';
import { approvedData, currentGeoLocation } from '../store/sms/reducer';
import './style.css';

const Layout = (props: PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentGeoLocation());
  }, []);
  const markPos = useSelector(state => currentGeoLocation(state));
  const {approvedPos, approvedNumber} = useSelector(state => approvedData(state));

  let markPosArray: any[] = [];
  const history = useHistory();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const lat = urlParams.get('lat');

  if (history.location.pathname === '/display') {
    if (!id || lat) {
      markPosArray = [approvedPos];
    } else {
      markPosArray = [markPos];
    }
  } else {
    markPosArray = [markPos];
  }
  console.log(markPos)
  console.log(markPosArray[0])
  let center = markPosArray[0] && markPosArray[0].lat ? markPosArray[0] : markPos;

  return (
    <div className="layout-container">
      <div className="map-wrapper">
        {center && center?.lat &&
          <Map location={center} zoomLevel={14} points={markPosArray} />
        }
      </div>
      {props.children}
    </div>
  )
}

interface Point {
  lat: number,
  lng: number
}

interface PropsType {
  text?: string,
  children: any
}
interface MarkerPropTypes {
  lat: number,
  lng: number,
  text?: string,
}

export default Layout;