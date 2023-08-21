import * as React from 'react';

// material-ui
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

// project imports
import { useDispatch, useSelector } from 'store';

// assets
import MaterialTable, { MTableAction, MTableToolbar } from 'material-table';
import { Delete, DownloadForOffline, FileCopy, FilterList, Print, SaveAlt, SystemUpdateAlt } from '@mui/icons-material';
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
import { useTheme } from '@mui/styles';
import { IconFileDownload } from '@tabler/icons';
import ReactToPrint from 'react-to-print';
import { CsvBuilder } from 'filefy';
const CustomerList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const tableRef = React.useRef(null);
    let componentRef = React.useRef(null);
    let modals = {};
    const isLoading = useSelector(customersModule.selectors.isLoading, shallowEqual);
    const [modalsState, setModalsState] = useState(modals);
    const [pageSize, setPageSize] = useState(20);
    const [selectedRows, setSelectedRows] = useState([]);

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
    // const handleBulkDelete = () => {
    //     const updatedData = tableData.filter((row) => !selectedRows.includes(row));
    //     setTableData(updatedData);
    // };
    const columns = [
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
    ];

    const exportAllSelectedRows = () => {
        new CsvBuilder('Order List.csv')
            .setColumns(columns.map((col) => col.title))
            .addRows(selectedRows.map((rowData) => columns.map((col) => rowData[col.field])))
            .exportFile();
    };
    return (
        <MainCard title="Order List" content={false}>
            <Box>
                <MaterialTable
                    tableRef={tableRef}
                    onSelectionChange={(rows) => setSelectedRows(rows)}
                    style={{ boxShadow: 'none' }}
                    columns={columns}
                    actions={[
                        // {
                        //     icon: 'delete',
                        //     tooltip: 'Delete all selected rows',
                        //     onClick: () => handleBulkDelete()
                        // },
                        {
                            icon: () => <DownloadForOffline />,
                            tooltip: 'Export all selected rows',
                            onClick: () => exportAllSelectedRows()
                        }
                    ]}
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
                    detailPanel={(rowData) => {
                        return <Details {...rowData} />;
                    }}
                    isLoading={isLoading}
                    options={{
                        exportButton: true,
                        exportAllData: true,
                        search: true,
                        showTitle: false,
                        pageSize: pageSize,
                        pageSizeOptions: [20, 50, 100, 200, 500],
                        draggable: true,
                        debounceInterval: 400,
                        exportFileName: 'Order List',
                        exportDelimiter: 'Order List',
                        toolbarButtonAlignment: 'left',
                        toolbar: true,
                        selection: true
                    }}
                />
            </Box>
        </MainCard>
    );
};

export default CustomerList;
