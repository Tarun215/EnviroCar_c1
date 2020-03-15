import {GeoJsonLayer} from '@deck.gl/layers';

export default function renderLayers(data, month) {
  const highlightedMonth = new Date(month).getMonth()
  
  const filteredFeatures = isNaN(highlightedMonth) ? data.features : data.features.filter(d => {
    const month = new Date(d.properties.begin).getMonth();
    return month === highlightedMonth
  })

  const fiilteredData = {
    "type": "FeatureCollection",
    "properties": {},
    "features": filteredFeatures
  }
  
    return new GeoJsonLayer({
        id: 'geojson-layer',
        data: fiilteredData,
        pickable: true,
        extruded: true,
        lineWidthScale: 10,
        lineWidthMinPixels: 1,
        getLineColor: d => (d.properties.color || [255,255,0]),
        getLineWidth: 1,
        opacity: 0.05
        // onHover: ({object, x, y}) => {
        //   const tooltip = object.properties.id || object.properties.station;
        //   /* Update tooltip
        //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        //   */
        // }
      }
    );
}