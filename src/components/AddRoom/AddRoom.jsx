import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './AddRoom.css'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function AddRoom(){
    
    const history=useHistory();
    const dispatch = useDispatch();
    const response = useSelector((store) => store.add);

    const[roomName, setRoomName]=useState('');
    const[desc, setDesc]=useState('');
    const[media, setMedia]=useState('');

    const handleSave = () =>{
        const newItem = {
            name: roomName,
            description: desc,
            upload: media,
        }
        console.log(newItem);

        dispatch({type:'ADD_ROOM', payload: newItem})

        setRoomName('');
        setDesc('');
        setMedia('');

        history.go(0);
    }


    return(

        <div className="addRoomSet">
            <div className="addRoomBox">
                <h2>Add Room</h2>
                {response.addReducer && (
                <h3 className="alert" role="alert">
                    {response.addReducer}
                </h3>)}
                <form>
                    {/* Each text field will listen for changes and set corresponding state */}
                    <TextField
                        onChange={(event) => setRoomName(event.target.value)} 
                        id="outlined-basic" 
                        label="Room Name" 
                        variant="outlined" 
                        required /> 
                    <br />
                    <TextField 
                        onChange={(event) => setDesc(event.target.value)}
                        id="outlined-basic" 
                        label="Description of Contents" 
                        variant="outlined" 
                        required />
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

            <div className="addRoomBox">
                <h2>Add Item</h2>
                <img src="https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    width="350px"
                    height="250px"
                />
                <p>Expensive Items</p>
                <p>Appliances, TV, Etc</p>
                <Button variant="contained" color="primary"
                    onClick={() => { history.push('/item') }} >
                    Add Item
                 </Button>
            </div>
        </div>
    )
}

export default AddRoom;