import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ItemEdit.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { FormControl } from '@material-ui/core';


function ItemEdit() {

    const history = useHistory();
    const dispatch = useDispatch();
    //contains info values from selected item to edit
    const item = useSelector((store) => store.editItem);

    //sets values from inputs
    const [itemName, setItemName] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [media, setMedia] = useState('');

    console.log('item edit page', item);

    const handleSave = () => {
        const editItem = {
            name: itemName,
            brand: brand,
            model: model,
            upload: media,
            id: item.id,
        }
        console.log(editItem);

        dispatch({ type: 'EDIT_ITEM_DB', payload: editItem })
        dispatch({ type: 'FETCH_ITEM' })

        history.push('/catalogue')
    }



    return (

        <div className ="itemEditForm">
            <FormControl>
            <h2>Edit Item</h2>

            <TextField
                onChange={(event) => setItemName(event.target.value)}
                id="outlined-basic"
                label={item.name}
                variant="outlined"
                required />
            <br />
            <TextField
                onChange={(event) => setBrand(event.target.value)}
                id="outlined-basic"
                label={item.brand}
                variant="outlined"
                required />
            <br />
            <TextField
                onChange={(event) => setModel(event.target.value)}
                id="outlined-basic"
                label={item.model}
                variant="outlined" />
            <br />
            <TextField
                onChange={(event) => setMedia(event.target.value)}
                id="outlined-basic"
                label="Picture/Video URL"
                variant="outlined" />
            <br />
            </FormControl>
            <br />
            <Button
                onClick={handleSave}
                variant="contained"
                color="primary">
                Save
            </Button>
            <Button variant="contained" color="secondary"
                onClick={() => { history.push('/catalogue') }}>
                Cancel
            </Button>
            


        </div>
    )
}

export default ItemEdit;