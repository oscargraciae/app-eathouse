import React from 'react';
import dynamic from 'next/dynamic'
const MapZone = dynamic(import('../components/map/MapZone'));

import LayoutEmpty from '../components/common/LayoutEmpty';

class MapAvailable extends React.Component {
  render() {
    return (
      <LayoutEmpty>
        <MapZone />
      </LayoutEmpty>
    )
  }
}

export default MapAvailable;