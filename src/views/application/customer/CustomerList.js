import * as React from 'react';

// material-ui
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

// project imports
import { useDispatch, useSelector } from 'store';

// assets
import MaterialTable, { MTableToolbar } from '@material-table/core';
import { FileCopy, FilterList, Print } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import Customers from 'repositories/Customers';
import customersModule from 'store/slices/customersModule';
import { openSnackbar } from 'store/slices/snackbar';
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import hasPermission from 'utils/adminPermission/hasPermission';
import permissions from 'utils/adminPermission/permissions';
import formatDate from 'utils/customFormates/formatDate';
import BlockMessageDialog from './BlockMessageDialog';
import Details from './Details';

const CustomerList = () => {
    const dispatch = useDispatch();
    const tableRef = React.useRef(null);
    let modals = {};
    const isLoading = useSelector(customersModule.selectors.isLoading, shallowEqual);
    const [modalsState, setModalsState] = useState(modals);
    const [pageSize, setPageSize] = useState(20);

    const handleOpen = (id) => {
        const modalsStateTmp = { ...modalsState };
        modalsStateTmp[`modal${id}`] = true;
        setModalsState(modalsStateTmp);
    };

    const handleClose = (id) => {
        const modalsStateTmp = { ...modalsState };
        modalsStateTmp[`modal${id}`] = false;
        setModalsState(modalsStateTmp);
    };

    const handleBlock = useCallback(async (id) => {
        handleOpen(id);
    }, []);

    const handleUnblock = useCallback(async (id) => {
        try {
            let res = await Customers.unblock(id, { _method: 'PATCH' });
            if (res.status === 200 && res.message) {
                dispatch(
                    openSnackbar({
                        open: true,
                        message: res.message,
                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                        variant: 'alert',
                        alert: {
                            color: 'success'
                        },
                        close: true
                    })
                );
            }
            tableRef.current.onQueryChange();
        } catch (error) {
            console.log('error', error);
            dispatch(
                openSnackbar({
                    open: true,
                    message: error.message,
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: true
                })
            );
        }
    }, []);

    return (
        <MainCard title="Order List" content={false}>
            <MaterialTable
                tableRef={tableRef}
                style={{ boxShadow: 'none' }}
                columns={[
                    { title: 'ID', field: 'id' },
                    {
                        title: 'CID',
                        field: 'cid',
                        sorting: false,
                        render: (rowData) => (
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={`/customer/customer-list/${rowData.id}`}
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                # {rowData.cid}
                            </Typography>
                        )
                    },
                    {
                        title: 'Pro Pic',
                        field: 'selfie',
                        render: (rowdata) => <Avatar src={rowdata?.selfie_middle} />,
                        sorting: false
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        sorting: false,
                        render: (rowData) => (
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={`/customer/customer-list/${rowData.id}`}
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                {rowData.name}
                            </Typography>
                        )
                    },
                    {
                        title: 'Phone',
                        field: 'mobile',
                        sorting: false,
                        render: (rowData) => (
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={`/customer/customer-list/${rowData.id}`}
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                {rowData.mobile}
                            </Typography>
                        )
                    },
                    { title: 'Email', field: 'email' },
                    {
                        title: 'Status',
                        field: 'status',
                        sorting: false,
                        render: (rowData) => (
                            <>
                                {rowData?.status === 'active' ? (
                                    <Chip label={rowData?.status} size="small" chipcolor="success" />
                                ) : (
                                    <Chip label={rowData?.status} size="small" chipcolor="orange" />
                                )}
                            </>
                        )
                    },

                    {
                        field: 'status',
                        title: 'Blocking',
                        hidden: !hasPermission(permissions.customers.update),
                        render: ({ status, id }) => {
                            if (status === 'active') {
                                return (
                                    <>
                                        <Button variant="outlined" color="secondary" onClick={() => handleBlock(id)}>
                                            Block
                                        </Button>
                                        <BlockMessageDialog
                                            open={modalsState[`modal${id}`] ?? false}
                                            handleClose={() => handleClose(id)}
                                            userId={id}
                                            tableRef={tableRef}
                                        />
                                    </>
                                );
                            } else {
                                return (
                                    <Button variant="outlined" color="primary" onClick={() => handleUnblock(id)}>
                                        Unblock
                                    </Button>
                                );
                            }
                        }
                    },

                    {
                        field: 'created_at',
                        title: 'Created',
                        render: (rowdata) => formatDate(rowdata.created_at)
                    }
                ]}
                components={{
                    Toolbar: (toolbarProps) => (
                        <Box display="flex" alignItems="center">
                            <Box sx={{ textAlign: 'right', marginLeft: 'auto' }}>
                                <Tooltip title="Copy">
                                    <IconButton size="large">
                                        <FileCopy />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Print">
                                    <IconButton size="large">
                                        <Print />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Filter">
                                    <IconButton size="large">
                                        <FilterList />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <MTableToolbar {...toolbarProps} />
                        </Box>
                    )
                }}
                detailPanel={(rowData) => {
                    return <Details {...rowData} />;
                }}
                data={async (query) => {
                    setPageSize(query.pageSize);
                    const res = await dispatch(
                        customersModule.getAll({
                            limit: query.pageSize,
                            page: query.page + 1,
                            sort: query.orderBy ? query.orderBy.field : 'id',
                            order: query.orderDirection || 'desc',
                            q: query.search
                        })
                    );
                    return JSON.parse(JSON.stringify(res));
                }}
                isLoading={isLoading}
                options={{
                    showTitle: false,
                    pageSize: pageSize,
                    pageSizeOptions: [20, 50, 100],
                    draggable: false,
                    actionsColumnIndex: -1,
                    debounceInterval: 400
                }}
            />
        </MainCard>
    );
};

export default CustomerList;
