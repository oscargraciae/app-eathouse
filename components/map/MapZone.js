import React from 'react';
import mapboxgl from 'mapbox-gl';

import { availableAreaPolygon } from '../../utils/geospatial';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJncmFjaWFlIiwiYSI6ImNqaDN6YW05cDBoY3gyeG8zMjRyM3F3czMifQ.lkeUhKGCrTLzI7PgePDRQA';

class MapZone extends React.Component {

  state = {
    zone: availableAreaPolygon,
    userLocation: this.props.userLocation,
  }

  componentDidMount() {
    let me = [-100.41261650000001, 25.7451598];
    

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: me,
      zoom: 11
    });

    map.on('load', () => {
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': availableAreaPolygon,
                }
            }
        },
        'layout': {},
        'paint': {
          'fill-color': '#3CCF75',
          'fill-opacity': 0.8,
        }
      })

      if(this.props.userLocation) {
        map.addLayer({
          id: "points",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              "type": "FeatureCollection",
              "features": [
                {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                    "type": "Point",
                    "coordinates": this.props.userLocation,
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 5,
            'circle-color': 'orange',
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1
          }
        })
      }
      
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
  }  

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom map" />
        <style jsx>{`
          .map {
            height: 470px;
          }
        `}</style>
      </div>
    )
  }
}

export default MapZone;