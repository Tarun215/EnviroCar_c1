import React from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import Charts from './components/Charts';
import refMunsterAllTracks from '../../data/refData/refMunsterAllTracks';
import renderLayer from './utils/renderLayer';

class BarChartVisualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedMonth : ''
        }
    }

    onHighLight = (highlightedMonth) => {
        this.setState({highlightedMonth});
    }

    render() {
        const { style, viewport } = this.props;
        const { highlightedMonth } = this.state;

        return(
            <div>
                <DeckGL
                  style={{ position: 'relative', height: 850 }}
                  layers={[renderLayer(refMunsterAllTracks, highlightedMonth)]}
                  initialViewState={viewport}
                  controller
                >
                    <StaticMap
                      mapStyle={style}
                      mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
                    />
                    <Charts 
                      highlight={highlightedMonth => this.onHighLight(highlightedMonth)}
                      highlightedMonth={highlightedMonth}
                    />
                </DeckGL>
            </div>
        )
    }
}

export default BarChartVisualization;