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
import { payrollSetSalry } from 'utils/FakeDatas/employee';
import { formatDate, formatDateTime } from 'utils/customFormates/formatDate';
import Chip from 'ui-component/extended/Chip';
const Payslip = () => {
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

        {
            title: 'Payroll Type',
            field: 'profile.payroll_type',
            sorting: true
        },
        {
            title: 'salary',
            field: 'profile.salary',
            sorting: true
        },
        {
            title: 'net salary',
            field: 'profile.net_salary',
            sorting: true
        },
        {
            title: 'status',
            field: 'profile.status',
            sorting: true,
            render: (rowData) => (
                <>
                    {rowData?.profile.status === 'paid' ? (
                        <Chip
                            sx={{ textTransform: 'uppercase', fontWeight: 600 }}
                            label={rowData?.profile.status}
                            size="large"
                            chipcolor="success"
                        />
                    ) : (
                        <Chip
                            sx={{ textTransform: 'uppercase', fontWeight: 600 }}
                            label={rowData?.profile.status}
                            size="large"
                            chipcolor="orange"
                        />
                    )}
                </>
            )
        }
    ];

    return (
        <MainCard title="Set Salary List" content={false}>
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
                    data={payrollSetSalry}
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
                        exportFileName: 'Set Salary List',
                        exportDelimiter: 'Set Salary List',
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

export default Payslip;
