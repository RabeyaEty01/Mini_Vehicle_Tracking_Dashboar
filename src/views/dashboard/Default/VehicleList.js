// src/components/VehicleList.js

import { List, ListItem, ListItemText } from "@mui/material";


const VehicleList = ({ vehicles }) => {
    return (
        <List>
            {/* {vehicles.map((vehicle) => (
                <ListItem key={vehicle.id}>
                    <ListItemText primary={`Vehicle ID: ${vehicle.id}`} secondary={`Status: ${vehicle.status}`} />
                </ListItem>
            ))} */}
        </List>
    );
};

export default VehicleList;
