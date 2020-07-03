import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import * as data from '../data/ne_110m_countries_copy.json';

const MapChart = () => {
    return (
        <div>
            <ComposableMap>
                <Geographies geography={data.default}>
                    {({ geographies }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
