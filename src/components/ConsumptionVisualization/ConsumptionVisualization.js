import React from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';

import ColorScheme from './utils/ColorScheme';
import refConsDataMunster from '../../data/refactoredPropData/refConsDataMunster';
import renderLayer from './utils/renderLayer';

export default function ConsumptionVisualization({viewport, style}) {
    return (
        <div>
            <DeckGL
              style={{ position : 'relative', height : 850 }}
              layers={[renderLayer(refConsDataMunster)]}
              initialViewState={viewport} 
              controller
            >
                <StaticMap 
                  mapStyle={style}
                  mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
                />
                <ColorScheme />
            </DeckGL>
      </div>
    );
};