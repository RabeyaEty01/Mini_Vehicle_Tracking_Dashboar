// material-ui
import { Grid } from '@mui/material';

// project imports
import initialVehicles from 'MocData/data';
import { gridSpacing } from 'store/constant';
import Map from './Map';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import VehicleList from './VehicleList';
const socket = io('http://localhost:4000'); // Replace with your server URL
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [vehicles, setVehicles] = useState(initialVehicles);

    const simulateRealTimeUpdates = () => {
        setInterval(() => {
            const updatedVehicles = vehicles.map((vehicle) => {
                // Simulate position updates
                const newLat = vehicle.lat + (Math.random() - 0.5) * 0.1;
                const newLng = vehicle.lng + (Math.random() - 0.5) * 0.1;
                // Simulate status updates
                const newStatus = Math.random() < 0.5 ? 'moving' : 'idle';
                return {
                    ...vehicle,
                    lat: newLat,
                    lng: newLng,
                    status: newStatus
                };
            });

            setVehicles(updatedVehicles);
        }, 5000); // Update every 5 seconds
    };

    useEffect(() => {
        //Simulate real-time updates using function
        simulateRealTimeUpdates();

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
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Map vehicles={vehicles} />
            </Grid>
            <Grid item xs={6}>
                chart
            </Grid>
            <Grid item xs={6}>
                <VehicleList vehicles={vehicles} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
