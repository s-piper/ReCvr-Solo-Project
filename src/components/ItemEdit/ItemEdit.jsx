import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

function ItemEdit(){

    const history=useHistory();
    const dispatch = useDispatch();
    const response = useSelector((store) => store.add);

    const[itemName, setItemName]=useState('');
    const[brand, setBrand]=useState('');
    const[model, setModel]=useState('');
    const[media, setMedia]=useState('');

    const handleSave = () =>{
        const editItem = {
            name: itemName,
            brand: brand,
            model: model,
            upload: media,
        }
        console.log(editItem);

        dispatch({type:'EDIT_ITEM', payload: editItem})
    }



    return(

        <div>
                                <TextField
                        onChange={(event) => setItemName(event.target.value)} 
                        id="outlined-basic" 
                        label="Item Name" 
                        variant="outlined" 
                        required /> 
                    <br />
                    <TextField 
                        onChange={(event) => setBrand(event.target.value)}
                        id="outlined-basic" 
                        label="Brand" 
                        variant="outlined" 
                        required />
                    <br />
                    <TextField
                        onChange={(event) => setModel(event.target.value)} 
                        id="outlined-basic" 
                        label="Model" 
                        variant="outlined" />
                    <br />
                    <TextField 
                        onChange={(event) => setMedia(event.target.value)}
                        id="outlined-basic" 
                        label="Picture/Video URL" 
                        variant="outlined" />
                    <br />
                    <Button 
                        onClick={handleSave}
                        variant="contained" 
                        color="primary">
                        Save
                    </Button>


        </div>
    )
}

export default ItemEdit;