import { LocationOn } from '@mui/icons-material';
import { Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with your server URL

const AnyReactComponent = ({ text }) => (
    <div style={{ color: 'red' }}>
        <Typography variant="h4">{text}</Typography> <LocationOn fontSize="large" />
    </div>
);

const Map = ({ initialVehicles }) => {
    const [vehicles, setVehicles] = useState(initialVehicles);

    useEffect(() => {
        // Simulate real-time updates using socket.io
        socket.on('updateData', (data) => {
            setVehicles(data);
        });

        return () => {
            // Clean up socket.io connection when component unmounts
            socket.disconnect();
        };
    }, []);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
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
