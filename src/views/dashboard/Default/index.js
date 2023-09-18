// material-ui
import { Grid } from '@mui/material';

// project imports
import initialVehicles from 'MocData/data';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import Map from './Map';
// import io from 'socket.io-client';
import VehicleBarChart from './VehicleBarChart';
import VehicleList from './VehicleList';

// const socket = io('http://localhost:4000'); // Replace with your server URL

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState(initialVehicles);

    const simulateRealTimeUpdates = () => {
        setInterval(() => {
            const currentTime = new Date().getTime();
            //update vehicles over time
            const updatedVehicles = vehicles.map((vehicle) => {
                const distance = Math.floor(Math.random() * 1000); // Simulated distance data
                const updatedDistanceCovered = [...vehicle.distanceCovered, { x: currentTime, y: distance }];
                return {
                    ...vehicle,
                    lat: vehicle.lat + (Math.random() - 0.5) * 0.1,
                    lng: vehicle.lng + (Math.random() - 0.5) * 0.1,
                    status: Math.random() < 0.5 ? 'moving' : 'idle',
                    distanceCovered: updatedDistanceCovered
                };
            });

            setVehicles(updatedVehicles);
        }, 5000); // Update every 5 seconds
    };

    useEffect(() => {
        //Simulate real-time updates using function
        simulateRealTimeUpdates();
        setLoading(false);
        // // Simulate real-time updates using socket.io
        // socket.on('updateData', (data) => {
        //     setVehicles(data);
        // });

        // return () => {
        //     // Clean up socket.io connection when component unmounts
        //     socket.disconnect();
        // };
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12}>
                <Map vehicles={vehicles} isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={6}>
                <VehicleBarChart vehicles={vehicles} isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={6}>
                <VehicleList vehicles={vehicles} isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
