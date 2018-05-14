import React from 'react';
import mapboxgl from 'mapbox-gl'
// import turf from '@turf/turf';
import { point, polygon, booleanPointInPolygon } from '@turf/turf';
import { isPointAvailable, availableAreaPolygon } from '../utils/geospatial';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJncmFjaWFlIiwiYSI6ImNqaDN6YW05cDBoY3gyeG8zMjRyM3F3czMifQ.lkeUhKGCrTLzI7PgePDRQA';

class MapaPrueba extends React.Component {
  constructor() {
    super();
    this.state = {
      lng: -100.40736300000003,
      lat: 25.758755,
      zoom: 5,
      meLocation: [ -69.18090820312499, 45.24395342262324 ],
    };
  }

  // componentDidMount() {
  //   const { lng, lat, zoom } = this.state;

  //   const map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: 'mapbox://styles/mapbox/streets-v9',
  //     center: [-68.13734351262877, 45.137451890638886],
  //     zoom
  //   });

  //   map.on('move', () => {
  //     const { lng, lat } = map.getCenter();
  //     this.setState({
  //       lng: lng.toFixed(4),
  //       lat: lat.toFixed(4),
  //       zoom: map.getZoom().toFixed(2)
  //     });
  //   });

  //   map.on('load', () => {
  //     map.addLayer({
  //       'id': 'maine',
  //       'type': 'fill',
  //       'source': {
  //           'type': 'geojson',
  //           'data': {
  //               'type': 'Feature',
  //               'geometry': {
  //                   'type': 'Polygon',
  //                   'coordinates': [
  //                       [
  //                       [-67.13734351262877, 45.137451890638886],
  //                       [-66.96466, 44.8097],
  //                       [-68.03252, 44.3252],
  //                       [-69.06, 43.98],
  //                       [-70.11617, 43.68405],
  //                       [-70.64573401557249, 43.090083319667144],
  //                       [-70.75102474636725, 43.08003225358635],
  //                       [-70.79761105007827, 43.21973948828747],
  //                       [-70.98176001655037, 43.36789581966826],
  //                       [-70.94416541205806, 43.46633942318431],
  //                       [-71.08482, 45.3052400000002],
  //                       [-70.6600225491012, 45.46022288673396],
  //                       [-70.30495378282376, 45.914794623389355],
  //                       [-70.00014034695016, 46.69317088478567],
  //                       [-69.23708614772835, 47.44777598732787],
  //                       [-68.90478084987546, 47.184794623394396],
  //                       [-68.23430497910454, 47.35462921812177],
  //                       [-67.79035274928509, 47.066248887716995],
  //                       [-67.79141211614706, 45.702585354182816],
  //                       [-67.13734351262877, 45.137451890638886]
  //                     ]
  //                   ]
  //               }
  //           }
  //       },
  //       'layout': {},
  //       'paint': {
  //           'fill-color': '#088',
  //           'fill-opacity': 0.8
  //       }
  //     })

  //     map.addLayer({
  //       id: "points",
  //       type: "circle",
  //       source: {
  //         type: "geojson",
  //         data: {
  //           "type": "FeatureCollection",
  //           "features": [
  //             {
  //               "type": "Feature",
  //               "properties": {},
  //               "geometry": {
  //                 "type": "Point",
  //                 "coordinates": this.state.meLocation,
  //               }
  //             }
  //           ]
  //         }
  //       },
  //       paint: {
  //         'circle-radius': 20,
  //         'circle-color': 'white',
  //         'circle-stroke-color': '#3887be',
  //         'circle-stroke-width': 3
  //       }
  //     })
  //   });

  //   map.on('click', (e) => {
  //     console.log("Evento Click--->", e);
  //     this.setState({ meLocation: [e.lngLat.lng, e.lngLat.lat] });
  //   });
  // }

  componentDidMount() {
    let me = [-100.41261650000001, 25.7451598];
    

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: me,
      zoom: 12
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
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
      })

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
                  "coordinates": me,
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 20,
          'circle-color': 'white',
          'circle-stroke-color': '#3887be',
          'circle-stroke-width': 3
        }
      })

      map.on('click', (e) => {
        console.log("Evento Click--->", e);
        this.setState({ meLocation: [e.lngLat.lng, e.lngLat.lat] });
        const isAvailable = isPointAvailable([e.lngLat.lng, e.lngLat.lat]);
        console.log("Es disponible-->", isAvailable);
      });
      
    });

  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom map" />
        <style jsx>{`
          .map {
            height: 500px;
          }
        `}</style>
      </div>
    );
  }
}

export default MapaPrueba;