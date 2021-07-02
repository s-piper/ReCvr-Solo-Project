import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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

        console.log('handledelete', item);
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Media</th>
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
                            <td>{item.upload}</td>
                            <td>{<button onClick={() => { history.push('/item-edit') }}>
                                Edit
                                </button>}
                            </td>
                            <td>{<button onClick={ () => handleDelete (item)}>
                                Delete
                                </button>}
                            </td>
                        </tr>)
                        })}
                </tbody>
            </table>



        </div>
    )
}

export default CataloguedItemTable;