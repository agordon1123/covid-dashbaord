import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import * as data from '../data/ne_110m_admin_0_countries_topo_json.json';

const MapChart = () => {
    return (
        <div>
            <ComposableMap>
                <Geographies geography={data.default}>
                    {( {geographies} ) => {
                        geographies.map(geo => {
                            console.log(geo);
                            return (
                                <Geography geography={geo} key={geo.rsmKey} />
                            )
                        });
                    
                    }}
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
