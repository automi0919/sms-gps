import { useSelector } from 'react-redux';
import Map from '../components/Map/Map';
import { currentGeoLocation } from '../store/sms/reducer';
import './style.css';
const Marker = (props: MarkerPropTypes) => <div><img src="/assets/images/marker.svg" srcSet="" alt={props.text} /></div>

const Layout  = (props:PropsType) => {
  const markPos = useSelector(state => currentGeoLocation(state));
  const markPosArray = [markPos];
  return (
    <div className="layout-container">
      <div className="map-wrapper">
        <Map location={markPos} zoomLevel={3}>
          {markPosArray.map((markPos, index) => {
            return (
              <Marker
                lat={markPos?.lat}
                lng={markPos?.lng}
                text={"Marker"}
                key={index}
              />
            )
          })}
        </Map>
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