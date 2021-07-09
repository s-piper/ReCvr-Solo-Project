import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import './RoomEdit.css';

function RoomEdit() {

    const history = useHistory();
    const dispatch = useDispatch();
    //contains info values from selected item to edit
    const room = useSelector((store) => store.editRoom);

    //sets values from inputs
    const [roomName, setRoomName] = useState('');
    const [desc, setDesc] = useState('');
    const [media, setMedia] = useState('');

    console.log('room edit page', room);

    const handleSave = () => {
        const editRoom = {
            name: roomName,
            description: desc,
            upload: media,
            id: room.id,
        }
        console.log(editRoom);

        dispatch({ type: 'EDIT_ROOM_DB', payload: editRoom })
        dispatch({ type: 'FETCH_ROOM' })

        history.push('/catalogue')
    }

    return (

        <div className="roomEdit">
            <FormControl>
            <h2>Edit Room</h2>

            <TextField
                onChange={(event) => setRoomName(event.target.value)}
                id="outlined-basic"
                label={room.room_name}
                variant="outlined"
                required />
            <br />
            <TextField
                onChange={(event) => setDesc(event.target.value)}
                id="outlined-basic"
                label={room.description}
                variant="outlined"
                required />
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

export default RoomEdit;