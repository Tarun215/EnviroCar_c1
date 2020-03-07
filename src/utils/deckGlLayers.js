import {GeoJsonLayer} from '@deck.gl/layers';

export default function renderLayers(data) {
    return new GeoJsonLayer({
        id: 'geojson-layer',
        data: data,
        pickable: true,
        extruded: true,
        lineWidthScale: 10,
        lineWidthMinPixels: 1,
        getLineColor: d => (d.properties.color),
        getLineWidth: 1,
        // onHover: ({object, x, y}) => {
        //   const tooltip = object.properties.id || object.properties.station;
        //   /* Update tooltip
        //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        //   */
        // }
      }
    );
}