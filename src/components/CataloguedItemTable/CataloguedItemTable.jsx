import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useHistory } from 'react-router-dom';
import CataloguedPdf from '../CataloguedPdf/CataloguedPdf';

function CataloguedItemTable() {

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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Upload</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.model}</td>
                                <td>
                                    <img src={item.upload} width="50" height="50" />
                                </td>
                                <td><IconButton onClick={() => { handleEdit(item) }}>
                                    <EditIcon />
                                </IconButton>
                                </td>
                                <td><IconButton onClick={() => handleDelete(item)}>
                                    <DeleteIcon />
                                </IconButton>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>


            < CataloguedPdf />
        </div>
    )
}

export default CataloguedItemTable;