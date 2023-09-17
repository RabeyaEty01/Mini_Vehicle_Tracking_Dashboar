import * as React from 'react';
// material-ui
import { Box, Chip, IconButton, Tooltip } from '@mui/material';
// assets
import { Refresh } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import { IconFileExport } from '@tabler/icons';
import MaterialTable from 'material-table';
import { useState } from 'react';

import initialVehicles from 'MocData/data';
import MainCard from 'ui-component/cards/MainCard';
// import Chip from 'ui-component/extended/Chip';

const VehicleListMain = () => {
    const theme = useTheme();
    const tableRef = React.useRef(null);
    const [pageSize, setPageSize] = useState(10);
    const [sort, setSort] = useState(false);

    const columns = [
        { title: 'ID', field: 'id', filtering: false },
        {
            title: 'Name',
            field: 'name',
            filtering: false
        },
        {
            title: 'Latitude',
            field: 'lat',
            filtering: false
        },
        {
            title: 'Longitude',
            field: 'lng',
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
                            color="error"
                            variant="outlined"
                        />
                    )}
                </>
            )
        }
    ];

    return (
        <MainCard title="Vahicle List" content={false}>
            <Box>
                <MaterialTable
                    tableRef={tableRef}
                    icons={{
                        Export: () => (
                            <IconFileExport
                                fontSize="large"
                                style={{ backgroundColor: theme.palette.secondary.main }}
                                size="large"
                                aria-label="edit"
                            />
                        )
                    }}
                    style={{ boxShadow: 'none' }}
                    columns={columns}
                    actions={[
                        {
                            icon: 'refresh',
                            tooltip: 'Refresh',
                            isFreeAction: true
                        }
                    ]}
                    components={{
                        Action: (props) => {
                            if (props.action || props.action.isfreeAction) {
                                return (
                                    <>
                                        <Tooltip title="Refresh">
                                            <IconButton
                                                onClick={() => {
                                                    tableRef.current && tableRef.current.onQueryChange();
                                                }}
                                                size="large"
                                            >
                                                <Refresh
                                                    fontSize="large"
                                                    style={{ backgroundColor: theme.palette.secondary.main }}
                                                    size="large"
                                                    aria-label="edit"
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                );
                            }
                        }
                    }}
                    data={initialVehicles}
                    options={{
                        exportButton: true,
                        exportAllData: true,
                        search: true,
                        showTitle: false,
                        pageSize: pageSize,
                        pageSizeOptions: [5, 10, 20, 50, 100],
                        debounceInterval: 400,
                        draggable: false,
                        exportFileName: 'Vehicle List',
                        exportDelimiter: 'Vehicle List',
                        toolbarButtonAlignment: 'left',
                        toolbar: true,
                        filtering: true,
                        sorting: false
                    }}
                />
            </Box>
        </MainCard>
    );
};

export default VehicleListMain;
