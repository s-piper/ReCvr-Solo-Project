import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import CataloguedRoomPdf from '../CataloguedRoomPdf/CataloguedRoomPdf';


function CataloguedRoomTable() {

    const rooms = useSelector((store) => store.room);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('rooms table', rooms);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ROOM'
        });
    }, []);

    const handleDelete = (room) => {

        console.log('handleDelete', room);
        dispatch({
            type: 'DELETE_ROOM',
            payload: room
        })
    }

    const handleEdit = (room) => {

        dispatch({type:'EDIT_ROOM', payload: room});
        history.push('/room-edit')

        console.log('handleEdit', room);

    }



    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Room Name</th>
                        <th>Description</th>
                        <th>Upload</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, i) => {
                        return (
                            <tr key={i}>
                                <td>{room.room_name}</td>
                                <td>{room.description}</td>
                                <td> 
                                    <img src={room.upload} width="50" height="50" />
                                </td>
                                <td>{<button onClick={() => {handleEdit(room)}}>
                                    Edit
                                </button>}
                                </td>
                                <td>{<button onClick={() => handleDelete(room)}>
                                    Delete
                                </button>}
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>

            <CataloguedRoomPdf />
        </div>
    )
}

export default CataloguedRoomTable;