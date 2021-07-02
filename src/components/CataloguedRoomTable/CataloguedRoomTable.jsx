import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


function CataloguedRoomTable () {

    const rooms = useSelector((store) => store.room);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('items table', rooms);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ROOM'
        });
    }, []);

    const handleDelete = (item) => {

        console.log('handledelete', item);
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }


    return(

        <div>

        </div>
    )
}

export default CataloguedRoomTable;