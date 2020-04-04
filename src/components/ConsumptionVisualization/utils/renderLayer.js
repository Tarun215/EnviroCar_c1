import {GeoJsonLayer} from '@deck.gl/layers';

const renderLayer = (data) => {
    return new GeoJsonLayer({
        id: 'geojson-layer',
        data: data,
        pickable: true,
        extruded: true,
        lineWidthScale: 10,
        lineWidthMinPixels: 1,
        getLineColor: d => (d.properties.color || [255,255,0]),
        getLineWidth: 1,
        opacity:0.15
        // onHover: ({object, x, y}) => {
        //   const tooltip = object.properties.id || object.properties.station;
        //   /* Update tooltip
        //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        //   */
        // }
      }
    );
}

export default renderLayer;