import * as React from 'react';
// material-ui
import { Box, Button } from '@mui/material';
// project imports
// assets
import { DeleteOutline, EditTwoTone, Refresh } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import { IconFileExport } from '@tabler/icons';
import MaterialTable from 'material-table';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { employeeSetUpData } from 'utils/FakeDatas/employee';
import { formatDate, formatDateTime } from 'utils/customFormates/formatDate';
const EmployeeSetup = () => {
    const theme = useTheme();
    const tableRef = React.useRef(null);
    const [sort, setSort] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const columns = [
        {
            title: 'ID',
            field: 'id',
            render: (rowData) => (
                <Button variant="outlined" size="medium" color="secondary">
                    {`#EMP00000${rowData?.id}`}
                </Button>
            )
        },
        {
            title: 'Name',
            field: 'profile.name',
            sorting: true
        },
        { title: 'Email', field: 'email' },
        {
            title: 'Branch',
            field: 'profile.branch',
            sorting: true
        },
        {
            title: 'Department',
            field: 'profile.department',
            sorting: true
        },
        {
            title: 'Designation',
            field: 'profile.designation',
            sorting: true
        },
        {
            field: 'date_of_joining_at',
            title: 'Date Of Joining',
            render: (rowdata) => formatDate(rowdata.date_of_joining_at)
        },
        {
            field: 'last_login_at',
            title: 'Last Login',
            render: (rowdata) => formatDateTime(rowdata.last_login_at)
        }
    ];

    return (
        <MainCard title="Customer List" content={false}>
            <Box>
                <MaterialTable
                    tableRef={tableRef}
                    style={{ boxShadow: 'none' }}
                    columns={columns}
                    actions={[
                        {
                            icon: () => (
                                <Refresh
                                    fontSize="large"
                                    style={{ backgroundColor: theme.palette.secondary.main }}
                                    size="large"
                                    aria-label="edit"
                                />
                            ),
                            tooltip: 'Refresh',
                            isFreeAction: true
                        },
                        {
                            icon: () => (
                                <EditTwoTone
                                    fontSize="large"
                                    style={{ backgroundColor: theme.palette.secondary.main }}
                                    size="large"
                                    aria-label="edit"
                                />
                            ),
                            tooltip: 'Edit',
                            isFreeAction: false

                            // onClick: (event, rowData) => {
                            //     setIsUpdateOpen(true);
                            //     setForUpdateSelectedPromotion(rowData);
                            // }
                        },
                        {
                            icon: () => (
                                <DeleteOutline
                                    fontSize="large"
                                    style={{ backgroundColor: theme.palette.error.main }}
                                    size="large"
                                    aria-label="delete"
                                />
                            ),
                            tooltip: 'Delete',
                            isFreeAction: false

                            // onClick: (event, rowData) => {
                            //     setIsUpdateOpen(true);
                            //     setForUpdateSelectedPromotion(rowData);
                            // }
                        }
                    ]}
                    data={employeeSetUpData}
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
                    options={{
                        exportButton: true,
                        exportAllData: true,
                        search: true,
                        showTitle: false,
                        pageSize: pageSize,
                        pageSizeOptions: [5, 10, 20, 50, 100],
                        debounceInterval: 400,
                        draggable: false,
                        exportFileName: 'Customer List',
                        exportDelimiter: 'Customer List',
                        toolbarButtonAlignment: 'left',
                        actionsColumnIndex: -1,
                        toolbar: true,
                        sorting: sort,
                        refresh: true
                    }}
                />
            </Box>
        </MainCard>
    );
};

export default EmployeeSetup;
