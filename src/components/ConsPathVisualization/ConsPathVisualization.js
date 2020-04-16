import React from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGl, { PathLayer } from 'deck.gl';

import ColorScheme from './components/ColorScheme';
import munsterData from '../../data/munsterData';

const style = 'mapbox://styles/mapbox/dark-v10';
const initialViewState = {
    longitude: 7.63,
    latitude: 51.96,
    zoom: 12,
    minZoom: 2,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
  }

// Using JSON data to convert to BINARY

// Extracting required data from JSON data
const PATH_DATA = munsterData.features.map(feature => {
    const path = feature.geometry.coordinates;
    const color = feature.consumption.map(consumption => {
      if (consumption === -1)
        return [0, 0, 255]
      else
        return (consumption < 1) ? [0, 255, 0] : (consumption < 2 ? [128, 255, 0] : (consumption < 3 ? [255, 255, 0] : (consumption < 4 ? [255, 128, 0] : [255, 0, 0])));
    })
    return {
      path,
      color
    }
  })

// Converting to BINARY
const positions = new Float64Array(PATH_DATA.map(d => d.path).flat(2));

const Color = [];
PATH_DATA.forEach(d => d.color.forEach(d => d.map(d => Color.push(d))));
const colors = new Uint8Array(Color);

const startIndices = new Uint16Array(PATH_DATA.reduce((acc, d) => {
    const lastIndex = acc[acc.length - 1];
    acc.push(lastIndex + d.path.length);
    return acc;
  }, [0]));

// Using BINARY to create deck PathLayer
const renderLayer = () => {
    return new PathLayer({
    id: 'path-layer',
    data: {
        length: PATH_DATA.length,
        startIndices: startIndices, // this is required to render the paths correctly!
        attributes: {
          getPath: {value: positions, size: 2},
          getColor: {value: colors, size: 3}
        }
    },
    pickable: true,
    widthScale: 10,
    widthMinPixels: 1,
    opacity: 0.1
})}

const ConsPathVisualization = () => {
    return (
    <div>
        <DeckGl
            style={{
                position:'relative',
                height: 850
            }}
            layers={[renderLayer()]}
            initialViewState={initialViewState}
            controller
        >
            <StaticMap
                mapStyle={style}
                mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
            />
            <ColorScheme />
        </DeckGl>
    </div>
    );
}

export default ConsPathVisualization;