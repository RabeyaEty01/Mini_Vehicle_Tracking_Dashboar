import * as React from 'react';
// material-ui
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
// project imports
import { useDispatch, useSelector } from 'store';
// assets
import MaterialTable from 'material-table';
import { DownloadForOffline, FilterList, FilterListOff, Refresh } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import Customers from 'repositories/Customers';
import customersModule from 'store/slices/customersModule';
import { openSnackbar } from 'store/slices/snackbar';
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import formatDate from 'utils/customFormates/formatDate';

import { CsvBuilder } from 'filefy';
import { employeeSetUpData } from 'utils/FakeDatas/employee';

const CustomerList = () => {
    const tableRef = React.useRef(null);
    const [sort, setSort] = useState(false);
     const [pageSize, setPageSize] = useState(10);
    const columns = [
        {
            title: 'ID',
            field: 'id',
            render: (rowData) => (
                <Chip label={`#EMP00000${rowData?.id}`} size="large" chipcolor="secondary">
                    # {rowData.id}
                </Chip>
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
            render: (rowdata) => formatDate(rowdata.last_login_at)
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
                            icon: 'refresh',
                            tooltip: 'Refresh Data',
                            isFreeAction: true
                        }
                    ]}
                    components={{
                        Action: (props) => {
                            if (props.action || props.action.isfreeAction) {
                                return (
                                    <>
                                        <Tooltip title="Filter">
                                            <IconButton
                                                onClick={() => {
                                                    setSort(!sort);
                                                }}
                                                size="large"
                                            >
                                                {sort ? <FilterList /> : <FilterListOff />}
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Refresh">
                                            <IconButton
                                                onClick={() => {
                                                    tableRef.current && tableRef.current.onQueryChange();
                                                }}
                                                size="large"
                                            >
                                                <Refresh />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                );
                            }
                        }
                    }}
                    data={employeeSetUpData}
                   
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
                        toolbar: true,
                        sorting: sort,
                        refresh: true
                    }}
                />
            </Box>
        </MainCard>
    );
};

export default CustomerList;
