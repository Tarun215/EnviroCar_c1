import { GeoJsonLayer } from '@deck.gl/layers';

const renderLayer = (data, highlightedMonth_num) => {
    const filteredFeatures = !highlightedMonth_num ? data.features : data.features.filter(feature => {
        const featureMonth = new Date(feature.properties.begin).getMonth();
        return featureMonth === highlightedMonth_num - 1;
    })

    const filteredData = {
        "type": "FeatureCollection",
        "properties": {},
        "features": filteredFeatures
    }

    return new GeoJsonLayer({
        id: 'geojson-layer',
        data: filteredData,
        pickable: true,
        extruded: true,
        lineWidthScale: 10,
        lineWidthMinPixels: 1,
        getLineColor: d => (d.properties.color || [255,255,0]),
        getLineWidth: 1,
        opacity: 0.1
        // onHover: ({object, x, y}) => {
        //   const tooltip = object.properties.id || object.properties.station;
        //   /* Update tooltip
        //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        //   */
        // }
    });
}

export default renderLayer;