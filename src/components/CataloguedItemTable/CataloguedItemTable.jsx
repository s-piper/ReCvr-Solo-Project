import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

function CataloguedItemTable() {

    const items = useSelector((store) => store.item);
    const dispatch = useDispatch();

    console.log('items table', items);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ITEM'
        });
    }, []);

    return (
        <div>

        </div>
    )
}

export default CataloguedItemTable;