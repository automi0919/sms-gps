import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import './Map.css'

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`

const Map = ({ location, zoomLevel, children}) => (
  <Wrapper>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCwMDO6ELEhz6ceHYks49c_7QPsst3glZ0' }}
        center={location}
        zoom={zoomLevel}
      >
        {children}
      </GoogleMapReact>
    </div>
  </Wrapper>
)
export default Map;