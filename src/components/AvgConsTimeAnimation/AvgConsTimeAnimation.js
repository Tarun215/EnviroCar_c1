import React from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import MapTitle from './components/MapTItle';
import munsterData from '../../data/refData/munsterData';
import RenderLayer from './utils/RenderLayer';

const modifiedFeatures = munsterData.features.map(feature => {
    const phenomenon = feature.statistics.filter(p => p.phenomenon.name === "Consumption");
    var color = [0, 0, 255];

    if(phenomenon.length) {
        const consumption = phenomenon[0].avg;
        color = (consumption < 1) ? [0, 255, 0] : (consumption < 2 ? [128, 255, 0] : (consumption < 3 ? [255, 255, 0] : (consumption < 4 ? [255, 128, 0] : [255, 0, 0])));
    }

    const properties = {
        ...feature.properties,
        color
    }

    return {
        "type": "Feature",
        properties,
        "geometry": feature.geometry,
    }
});

const filteredData = {
    "type": "FeatureCollection",
    "properties": {},
    "features": modifiedFeatures
}

class AvgConsTimeAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedMonth_num: 0,
            highlightedMonth_string: ''
        };
    }

    months_num = [11,12,1,2,3];
    months_string = ['Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020'];

    tick() {
        const index = this.months_num.indexOf(this.state.highlightedMonth_num);
        const updatedIndex = index<4 && index>-1 ? index + 1 : 0;

        this.setState({highlightedMonth_num : this.months_num[updatedIndex]});
        this.setState({highlightedMonth_string : this.months_string[updatedIndex]});
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { style, viewport } = this.props;
        const { highlightedMonth_num, highlightedMonth_string } = this.state;

        return (
            <div>
                <DeckGL
                  style={{ position:'relative', height: 800}}
                  layers={[RenderLayer(filteredData, highlightedMonth_num)]}
                  initialViewState={viewport}
                  controller
                >
                    <StaticMap 
                      mapStyle={style}
                      mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
                    />
                    <MapTitle month={highlightedMonth_string} />
                </DeckGL>
            </div>
        );
    };
}

export default AvgConsTimeAnimation;