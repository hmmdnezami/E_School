import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

class SchoolMap extends Component {
  render() {
    const mapContainerStyle = {
      width: '100%',
      height: '400px'
    };

    const center = {
      lat: 25.6106,
      lng: 85.043
    };

    const options = {
      disableDefaultUI: true,
      zoomControl: true
    };

    return (
      <LoadScript >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default SchoolMap;
