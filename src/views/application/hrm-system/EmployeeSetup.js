import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useQuery } from 'react-query';
import customersModule from 'store/slices/customersModule';
import { useDispatch } from 'store';
import Chip from 'ui-component/extended/Chip';

const Example = () => {
    const dispatch = useDispatch();
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState([]);
    const [pageSize, setPageSize] = useState(20);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    });
    //  data={async (query) => {
    //                         setPageSize(query.pageSize);
    //                         const res = await dispatch(
    //                             customersModule.getAll({
    //                                 limit: query.pageSize,
    //                                 page: query.page + 1,
    //                                 sort: query.orderBy ? query.orderBy.field : 'id',
    //                                 order: query.orderDirection || 'desc',
    //                                 q: query.search
    //                             })
    //                         );
    //                         return JSON.parse(JSON.stringify(res));
    //                     }}
    const { data, isError, isFetching, isLoading, refetch } = useQuery({
        queryKey: [
            'table-data'
            // columnFilters, //refetch when columnFilters changes
            // globalFilter, //refetch when globalFilter changes
            // pagination.pageIndex, //refetch when pagination.pageIndex changes
            // pagination.pageSize, //refetch when pagination.pageSize changes
            // sorting //refetch when sorting changes
        ],
        queryFn: async (query) => {
            // const fetchURL = new URL('/api/data', 'https://www.material-react-table.com');
            // fetchURL.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
            // fetchURL.searchParams.set('size', `${pagination.pageSize}`);
            // fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
            // fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
            // fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));
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
        },
        keepPreviousData: true
    });

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID'
            },
            {
                accessorKey: 'cid',
                header: 'CID'
            },

            {
                accessorKey: 'name',
                header: 'Name'
            },
            {
                accessorKey: 'email',
                header: 'Email'
            },
            {
                accessorKey: 'mobile',
                header: 'Phone Number'
            },
            {
                header: 'Status',
                accessorKey: 'status',
                render: (rowData) => (
                    <>
                        {rowData?.status === 'active' ? (
                            <Chip label={rowData?.status} size="small" chipcolor="success" />
                        ) : (
                            <Chip label={rowData?.status} size="small" chipcolor="orange" />
                        )}
                    </>
                )
            }
        ],
        []
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data?.data ?? []} //data is undefined on first render
            initialState={{ showColumnFilters: true }}
            manualFiltering
            manualPagination
            manualSorting
            muiToolbarAlertBannerProps={
                isError
                    ? {
                          color: 'error',
                          children: 'Error loading data'
                      }
                    : undefined
            }
            onColumnFiltersChange={setColumnFilters}
            onGlobalFilterChange={setGlobalFilter}
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            renderTopToolbarCustomActions={() => (
                <Tooltip arrow title="Refresh Data">
                    <IconButton onClick={() => refetch()}>
                        <RefreshIcon />
                    </IconButton>
                </Tooltip>
            )}
            rowCount={data?.meta?.totalRowCount ?? 0}
            // state={{
            //     columnFilters,
            //     globalFilter,
            //     isLoading,
            //     pagination,
            //     showAlertBanner: isError,
            //     showProgressBars: isFetching,
            //     sorting
            // }}
        />
    );
};

export default Example;
