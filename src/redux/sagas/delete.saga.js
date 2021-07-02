import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action) {
    console.log('got to deleteItem', action.payload);
    
    try {
        // console.log(action.payload);
        yield axios.delete(`/api/item/${action.payload.id}`)
        // refresh DOM
        yield put({type: 'FETCH_ITEM'});
    } catch (err) {
        console.log('DELETE_ITEM:', err)
    }
}

function* deleteRoom(action) {
    console.log('got to deleteROOM', action.payload);
    
    try {
        // console.log(action.payload);
        yield axios.delete(`/api/room/${action.payload.id}`)
        // refresh DOM
        yield put({type: 'FETCH_ROOM'});
    } catch (err) {
        console.log('DELETE_ROOM:', err)
    }
}


function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('DELETE_ROOM', deleteRoom)
}

export default deleteSaga;