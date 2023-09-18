import * as React from 'react';
// material-ui
import { Box, Chip } from '@mui/material';
// assets
import MaterialTable from 'material-table';
import { useState } from 'react';

const VehicleList = ({ vehicles }) => {
    const tableRef = React.useRef(null);
    const [pageSize, setPageSize] = useState(5);

    const columns = [
        {
            title: 'Name',
            field: 'name',
            filtering: false
        },

        {
            title: 'Status',
            field: 'status',
            filtering: true,
            render: (rowData) => (
                <>
                    {rowData?.status === 'moving' ? (
                        <Chip
                            style={{ textTransform: 'capitalize' }}
                            label={rowData?.status}
                            size="small"
                            color="success"
                            variant="outlined"
                        />
                    ) : (
                        <Chip
                            style={{ textTransform: 'capitalize' }}
                            label={rowData?.status}
                            size="small"
                            color="warning"
                            variant="outlined"
                        />
                    )}
                </>
            )
        }
    ];

    return (
        <Box>
            <MaterialTable
                tableRef={tableRef}
                style={{ boxShadow: 'none' }}
                columns={columns}
                data={vehicles}
                title="Vehicle List"
                options={{
                    pageSize: pageSize,
                    pageSizeOptions: [5, 10, 20, 50, 100],
                    debounceInterval: 400,
                    showFirstLastPageButtons: false,
                    exportButton: true,
                    exportAllData: true,
                    draggable: false,
                    filtering: true,
                    sorting: false,
                    search: true
                }}
            />
        </Box>
    );
};

export default VehicleList;
