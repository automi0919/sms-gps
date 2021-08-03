import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import './Map.css'

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`
const createMapOptions = () => {
  return {
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#444444' }],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{ color: '#f2f2f2' }],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{ visibility: '#off' }],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [{ saturation: '-100' }, { lightness: 45 }],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ color: '#46bcec' }, { visibility: 'on' }],
      },
    ],
  }
}
const Map = ({ location, zoomLevel, children }) => (
  <Wrapper>
    <div className='google-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCO34vxnjcT_NlL8oP6BtF-A2E9AqN2u-k' }}
        center={location}
        zoom={zoomLevel}
        options={createMapOptions}
      >
        {children}
      </GoogleMapReact>
    </div>
  </Wrapper>
)
export default Map
