import React from 'react';

const CITIES_VISUALISED = [
    {  label: 'Hamm',
        value: {
            longitude: 7.80,
            latitude: 51.68,
            zoom: 12,
            minZoom: 2,
            maxZoom: 16,
            pitch: 0,
            bearing: 0
        }
    },
    { label: 'Chemnitz', 
        value: {
            longitude: 12.89,
            latitude: 50.79,
            zoom: 12,
            minZoom: 2,
            maxZoom: 16,
            pitch: 0,
            bearing: 0
        }
    },
    {
        label: 'Bremen',
        value: {
            longitude: 9.18,
            latitude: 53.09,
            zoom: 12,
            minZoom: 2,
            maxZoom: 16,
            pitch: 0,
            bearing: 0
        }
    }
]


export function CitySelector({ currentCity, onCityChange }) {
    return(
        <select
            className="city-selector"
            style=  {{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 100
            }}
            value={currentCity}
            onChange={e => {
                console.log("event : ",e)
                onCityChange(e.target.value)}}
        >
            {CITIES_VISUALISED.map(({ label, value }) => (
                <option key={label} value>
                    {label}
                </option>
            ))}
        </select>
    );
}