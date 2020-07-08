import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import * as mapData from '../data/ne_110m_countries_copy.json';

const MapChart = (props) => {
    const { data } = props;

    const calcColor = (percentage) => {
        let r, g, b = 0;
        if (percentage < 50) {
            r = 255;
            g = Math.round(5.1 * percentage);
        } else {
            g = 255;
            r = Math.round(510 - 5.1 * percentage);
        }
        var h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }
    
    return (
        <div>
            <ComposableMap>
                <Geographies geography={mapData.default}>
                    {({ geographies }) => 
                        geographies.map(geo => {
                            let totalCases = data[geo.properties.ISO_A2];
                            let percentage = Math.round(data[geo.properties.ISO_A2] / data['largest']) * 100;
                            return (
                                <Geography key={geo.rsmKey} geography={geo} fill={totalCases !== undefined ? calcColor(percentage) : null} />
                            )
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
