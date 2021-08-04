import React, { useRef } from 'react';
// import PropTypes from 'prop-types';

import { MapContainer, TileLayer, Marker, Popup, useMapEvent, Circle } from 'react-leaflet';

const PAINTUS_COORDS = { lat: 50.39967027563371, lng: 30.522747906244298 };

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}


const Map = () => {
  const animateRef = useRef(true);
  return (
    <MapContainer
      center={PAINTUS_COORDS}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}

    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        riseOnHover
        position={PAINTUS_COORDS}
      >
        <Popup>
          Paintus
          {' '}
          <br />
          {' '}
          Україна, м.Київ, вулиця Голосіївська, 9, 02000
        </Popup>
      </Marker>
      <Circle
        center={PAINTUS_COORDS}
        pathOptions={{ color: 'purple', fillColor: 'blue' }}
        radius={50}
      />
      <SetViewOnClick animateRef={animateRef} />
    </MapContainer>
  );
};

// Map.propTypes = {

// }

export default Map;
