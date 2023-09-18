// material-ui
import { Grid } from '@mui/material';

// project imports
import initialVehicles from 'MocData/data';
import { gridSpacing } from 'store/constant';
import Map from './Map';
import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import VehicleList from './VehicleList';
import VehicleBarChart from './VehicleBarChart';

// const socket = io('http://localhost:4000'); // Replace with your server URL

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
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
                <Map vehicles={vehicles} />
            </Grid>
            <Grid item xs={12} md={6}>
                <VehicleBarChart vehicles={vehicles} />
            </Grid>
            <Grid item xs={12} md={6}>
                <VehicleList vehicles={vehicles} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
