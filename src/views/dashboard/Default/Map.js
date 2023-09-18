import { LocationOn } from '@mui/icons-material';
import { Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';


const AnyReactComponent = ({ text }) => (
    <div style={{ color: 'red' }}>
        <Typography variant="h4">{text}</Typography> <LocationOn fontSize="large" />
    </div>
);

const Map = ({ vehicles }) => {
    return (
        <div style={{ height: '600px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_CLUSTER_MARKER_MAP_KEY }}
                defaultCenter={{ lat: vehicles[0]?.lat, lng: vehicles[0]?.lng }}
                defaultZoom={12}
            >
                {vehicles.map((vehicle) => (
                    <AnyReactComponent key={vehicle.id} lat={vehicle.lat} lng={vehicle.lng} text={vehicle.name} />
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
