// material-ui
import { Grid } from '@mui/material';

// project imports
import initialVehicles from 'MocData/data';
import { gridSpacing } from 'store/constant';
import Map from './Map';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Map initialVehicles={initialVehicles} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
