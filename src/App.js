import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import renderLayers from './utils/deckGlLayers';

// refactored consumption data
import refConsDataMunster from './data/refactoredData/refConsDataMunster';

// importing city-selector
import MapTitle from './utils/mapTitle';
import ColorScheme from './utils/colorScheme';

// Using Refactored data to create final geojson file
const final_data=refConsDataMunster;

// Initial viewport state
const INITIAL_VIEW_STATE = {
  longitude: 7.63,
  latitude: 51.96,
  zoom: 12,
  minZoom: 2,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
}

// DeckGL layer
const layer = renderLayers(final_data);

// App Component
export default class App extends Component {
  state = {
    style: 'mapbox://styles/mapbox/dark-v10',
    viewport: INITIAL_VIEW_STATE
  }

  render() {
    return (
      <div>
        <div>
        <DeckGL 
          layers={[layer]}
          initialViewState={this.state.viewport} 
          controller
        >
          <StaticMap 
            mapStyle={this.state.style}
            mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
          />
        </DeckGL>
        <MapTitle />
        <ColorScheme />
      </div>
      </div>
    );
  }
}