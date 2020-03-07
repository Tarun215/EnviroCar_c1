import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

// import {CitySelector} from './utils/controls';

import renderLayers from './utils/deckGlLayers';

// track data from EnviroCar API
import trackData from './data/trackData';
import trackData1 from './data/trackData1';
import trackData2 from './data/trackData2';
import trackData3 from './data/trackData3';
import trackData4 from './data/trackData4';
import trackData5 from './data/trackData5';
import trackData6 from './data/trackData6';
import trackData7 from './data/trackData7';
import trackData8 from './data/trackData8';
import trackData9 from './data/trackData9';
import trackData10 from './data/trackData10';
import trackData11 from './data/trackData11';
import trackData12 from './data/trackData12';

// function to process track data from EnviroCar API
import process_feature_data from './utils/process_data';

// Refactoring raw data
const features = process_feature_data([trackData, trackData1, trackData2, trackData3, trackData4, trackData5, trackData6, trackData7, trackData8, trackData9, trackData10, trackData11, trackData12]);

// Using Refactored data to create final geojson file
const final_data={
  type: "FeatureCollection",
  properties: {},
  features
}

// Initial viewport state
const INITIAL_VIEW_STATE = {
  longitude: 7.80,
  latitude: 51.68,
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