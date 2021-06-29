import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './AddItem.css'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



function AddItem() {

    const history=useHistory();
    const dispatch = useDispatch();

    const[itemName, setItemName]=useState('');
    const[brand, setBrand]=useState('');
    const[model, setModel]=useState('');
    const[media, setMedia]=useState('');

    //Bundles state into object and makes a dispatch call
    //with newItem object
    const handleSave = () =>{
        const newItem = {
            name: itemName,
            brand: brand,
            model: model,
            upload: media,
        }
        console.log(newItem);

        dispatch({type:'ADD_ITEM', payload: newItem})
    }

    return (
        <div className="addItemSet">
            <div className="addItemBox">
                <h2>Individual Item</h2>

                <form>
                    {/* Each text field will listen for changes and set corresponding state */}
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
                    <p>*Required</p>
                </form>
            </div>

            <div className="addItemBox">
                <h2>New Room</h2>
                <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    width="350px"
                    height="250px"
                />
                <p>
                    The small stuff can add up. Pick a room and describe
                    what's in it.
                    </p>
                <p>
                    Bedroom: 9 Levis Jeans, 4 Pillows, 2 Ikea Nightstands
                    </p>
                <Button variant="contained" color="primary"
                    onClick={() => { history.push('/room') }} >
                    Add Room
                 </Button>
            </div>


        </div>
    )
}

export default AddItem;