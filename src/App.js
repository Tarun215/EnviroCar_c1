import React, { Component } from 'react';

import TimeAnimation from './components/TimeAnimation/TimeAnimation';
import ConsumptionVisualization from './components/ConsumptionVisualization/ConsumptionVisualization';
import BarChartVisualization from './components/BarChartVisualization/BarChartVisualization';
import ConsPathVisualization from './components/ConsPathVisualization/ConsPathVisualization';
import ConsTimeAnimation from './components/ConsTimeAnimation/ConsTimeAnimation';
import AvgConsTimeAnimation from './components/AvgConsTimeAnimation/AvgConsTimeAnimation';
import './App.css';

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

// App Component
export default class App extends Component {
  state = {
    style: 'mapbox://styles/mapbox/dark-v10',
    viewport: INITIAL_VIEW_STATE,
  }

  render() {
    return (
      <div className="app">
        <div className="title">
          <h1 className="center">EnviroCar tracks Visualization for munster bbox</h1>
          <h3 className="center">(Please scroll down to see other visualizations)</h3>
        </div>
        <div>
          <h2 className="center">All tracks Visualization with time animation</h2>
        </div>
        <div>
            <TimeAnimation
              style={this.state.style}
              viewport={this.state.viewport}
            />
        </div>
        <div>
          <h2 className="center">All tracks Visualization with bar chart</h2>
          <h3 className="center">Please hover over bars to see changes in deck layers</h3>
        </div>
        <div>
          <BarChartVisualization viewport={this.state.viewport} style={this.state.style} />
        </div>
        <div>
          <h2 className="center">Consumption Data Visualization (using old GeoJSON Layer)</h2>
        </div>
        <div>
          <ConsumptionVisualization viewport={this.state.viewport} style={this.state.style} />
        </div>
        <div>
          <h2 className="center">Consumption Data Visualization using PathLayer</h2>
        </div>
        <div>
          <ConsPathVisualization />
        </div>
        <div>
          <h2 className="center">Consumption Data Visualization with Time Animation</h2>
          <h3 className="center">Color Scheme is same as above visualizations.</h3>
        </div>
        <div>
          <ConsTimeAnimation viewport={this.state.viewport} style={this.state.style} />
        </div>
        <div>
          <h2 className="center">Average Consumption per Track Visualization with Time Animation</h2>
          <h3 className="center">Color Scheme is same as above visualizations.</h3>
        </div>
        <div>
          <AvgConsTimeAnimation viewport={this.state.viewport} style={this.state.style} />
        </div>
      </div>
    );
  }
}