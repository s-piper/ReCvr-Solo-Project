import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CataloguedPdf from '../CataloguedPdf/CataloguedPdf';
import './ItemTableUi.css'


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, brand, model, upload) {
    return { name, brand, model, upload };
}


export default function BasicTable() {
    const classes = useStyles();

    const items = useSelector((store) => store.item);

    const dispatch = useDispatch();
    const history = useHistory();

    console.log('items table', items);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ITEM'
        });
    }, []);

    const handleDelete = (item) => {

        console.log('handleDelete', item);
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }

    const handleEdit = (item) => {

        dispatch({ type: 'EDIT_ITEM', payload: item });
        history.push('/item-edit')

        console.log('handleEdit', item);

    }

    return (
        <div>
            <div className="CatalogueTable">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name </TableCell>
                                <TableCell align="center">Brand</TableCell>
                                <TableCell align="center">Model</TableCell>
                                <TableCell align="center">Upload</TableCell>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.brand}</TableCell>
                                    <TableCell align="center">{row.model}</TableCell>
                                    <TableCell align="center"><img src={row.upload} height="75" width="75" /></TableCell>
                                    <TableCell align="center"><IconButton onClick={() => { handleEdit(row) }}>
                                        <EditIcon fontSize="large" />
                                    </IconButton></TableCell>
                                    <TableCell align="center"><IconButton onClick={() => { handleDelete(row) }}>
                                        <DeleteIcon fontSize="large" />
                                    </IconButton></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <div className="ButtonPDF">
                    <CataloguedPdf />
                </div>
            </div>
        </div>

    );
}
