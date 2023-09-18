import { LocationOn } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import SkeletonMapCard from 'ui-component/cards/Skeleton/MapCard';
const AnyReactComponent = ({ text, status }) => (
    <Box style={{ color: 'red' }}>
        <Box sx={{ mb: 1 }}>
            <Button
                sx={{ textTransform: 'capitalize', borderRadius: '20px' }}
                size="small"
                color={status === 'moving' ? 'success' : 'warning'}
                variant="contained"
            >
                {status}
            </Button>
            {/* <Typography variant="h5">{text}</Typography> */}
        </Box>
        <LocationOn fontSize="large" />
    </Box>
);

const Map = ({ vehicles, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonMapCard />
            ) : (
                <div style={{ height: '500px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_CLUSTER_MARKER_MAP_KEY }}
                        defaultCenter={{ lat: vehicles[0]?.lat, lng: vehicles[0]?.lng }}
                        defaultZoom={12}
                    >
                        {vehicles.map((vehicle) => (
                            <AnyReactComponent
                                key={vehicle.id}
                                lat={vehicle.lat}
                                lng={vehicle.lng}
                                text={vehicle.name}
                                status={vehicle.status}
                            />
                        ))}
                    </GoogleMapReact>
                </div>
            )}
        </>
    );
};

export default Map;
