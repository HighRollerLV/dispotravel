import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";


const Map = () => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={16}
            style={{width: '100%', height: '463px', border: '2px solid gray', borderRadius: '4px'}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map;