import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import renderLayers from './utils/deckGlLayers';

// refactored data
import refConsumpData from './data/refactoredData/refConsumpData';

// Using Refactored data to create final geojson file
const final_data=refConsumpData

// Initial viewport state
const INITIAL_VIEW_STATE = {
  longitude: 12.87,
  latitude: 50.83,
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

  onCityChange = city => {
    console.log("city_viewport : ", city)
    this.setState({viewport : city})
  }

  render() {
    return (
      <div>
        <div>
        {/* <CitySelector
          onCityChange={this.onCityChange}
          currentCity={this.state.viewport}
        /> */}
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
      </div>
      </div>
    );
  }
}