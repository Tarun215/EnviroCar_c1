import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import renderLayers from './utils/deckGlLayers';

// importing all-tracks data
import refMunsterAllTracks from './data/refData/refMunsterAllTracks';

// importing map-title, colorScheme and chart
import MapTitle from './utils/mapTitle';
import Charts from './utils/chart';

// Using Refactored data to create final geojson file
const final_data=refMunsterAllTracks;

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
// const layer = renderLayers(final_data);

// App Component
export default class App extends Component {
  state = {
    style: 'mapbox://styles/mapbox/dark-v10',
    viewport: INITIAL_VIEW_STATE,
    highlightedMonth: ''
  }

  _onHighlight(highlightedMonth) {
    this.setState({highlightedMonth});
  }

  render() {
    return (
      <div>
        <div>
        <DeckGL 
          layers={[renderLayers(final_data, this.state.highlightedMonth)]}
          initialViewState={this.state.viewport} 
          controller
        >
          <StaticMap 
            mapStyle={this.state.style}
            mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
          />
        </DeckGL>
        <MapTitle />
        <Charts highlight={month => this._onHighlight(month)} highlightedMonth={this.state.highlightedMonth}/>
      </div>
      </div>
    );
  }
}