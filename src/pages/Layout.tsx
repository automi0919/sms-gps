import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../components/Map/Map';
import { getCurrentGeoLocation } from '../store/sms/actions';
import { approvedData, currentGeoLocation } from '../store/sms/reducer';
import './style.css';

const Layout  = (props:PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentGeoLocation());
  }, [])
  const markPos = useSelector(state => currentGeoLocation(state));
  const approvedPos = useSelector(state => approvedData(state));
  const markPosArray = [markPos, approvedPos];
  return (
    <div className="layout-container">yar
      <div className="map-wrapper">
        <Map location={markPos} zoomLevel={14} points={markPosArray}/>
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
  text?: string
}

export default Layout;