import React, { useCallback, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import customersModule from 'store/slices/customersModule';
import { useDispatch, useSelector } from 'store';
import { shallowEqual } from 'react-redux';
const isLoading = useSelector(customersModule.selectors.isLoading, shallowEqual);


const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe'
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky'
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe'
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio'
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe'
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia'
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy'
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska'
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs'
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina'
    }
];
const EmployeeSetup = () => {
    const dispatch = useDispatch();
    const tableRef = React.useRef(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => data);
    const [validationErrors, setValidationErrors] = useState({});
    const [pageSize, setPageSize] = useState(20);
    const handleCreateNewRow = (values) => {
        tableData.push(values);
        setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row) => {
            if (!confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData]
    );

    const getCommonEditTextFieldProps = useCallback(
        (cell) => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'age'
                            ? validateAge(+event.target.value)
                            : validateRequired(event.target.value);
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors
                        });
                    }
                }
            };
        },
        [validationErrors]
    );

    const columns = useMemo(
        () => [
            {
                // accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80
            },
            // {
            //     accessorKey: 'CID',
            //     header: 'cid',
            //     size: 140,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell)
            //     })
            // },
            // {
            //     accessorKey: 'Pro Pic',
            //     header: 'selfie',
            //     size: 140,
            //     render: (rowdata) => <Avatar src={rowdata?.selfie_middle} />,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell)
            //     })
            // },
            {
                // accessorKey: 'email',
                header: 'Email',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'email'
                })
            }
            // {
            //     accessorKey: 'age',
            //     header: 'Age',
            //     size: 80,
            //     muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //         ...getCommonEditTextFieldProps(cell),
            //         type: 'number'
            //     })
            // }
            // {
            //     accessorKey: 'state',
            //     header: 'State',
            //     muiTableBodyCellEditTextFieldProps: {
            //         select: true, //change to select for a dropdown
            //         // children: states.map((state) => (
            //         //     <MenuItem key={state} value={state}>
            //         //         {state}
            //         //     </MenuItem>
            //         // ))
            //     }
            // }
        ],
        [getCommonEditTextFieldProps]
    );

    return (
        <>
            <MaterialReactTable
                displayColumnDefOptions={{
                    'mrt-row-actions': {
                        muiTableHeadCellProps: {
                            align: 'center'
                        },
                        size: 120
                    }
                }}
                columns={columns}
                data={async (query) => {
                    // console.log('query', query);
                    setPageSize(query.pageSize);
                    const res = await dispatch(
                        customersModule.getAll({
                            limit: query.pageSize,
                            page: query.page + 1,
                            // sort: query.orderBy ? query.orderBy.field : 'id',
                            order: query.orderDirection || 'desc',
                            // q: query.search
                        })
                    );
                    console.log('res', res);
                    return JSON.parse(JSON.stringify(res));
                }}
                editingMode="modal" //default
                enableColumnOrdering
                enableEditing
                onEditingRowSave={handleSaveRowEdits}
                onEditingRowCancel={handleCancelRowEdits}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
                renderTopToolbarCustomActions={() => (
                    <Button color="secondary" onClick={() => setCreateModalOpen(true)} variant="contained">
                        Create New Account
                    </Button>
                )}
            />
            {/* <CreateNewAccountModal
                columns={columns}
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={handleCreateNewRow}
            /> */}
        </>
    );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {})
    );

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create New Account</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem'
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            />
                        ))}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create New Account
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
const validateAge = (age) => age >= 18 && age <= 50;

export default EmployeeSetup;
