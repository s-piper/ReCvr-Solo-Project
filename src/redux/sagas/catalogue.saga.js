import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editItem(action) {
    try {
        yield axios.put('api/item', action.payload);
    } catch {
        console.log('Error in Item Edit Saga');
    }
}

function* editRoom(action) {
    try {
        yield axios.put('api/room', action.payload);
    } catch {
        console.log('Error in Room Edit Saga');
    }
}


function* catalogueSaga() {
    yield takeLatest('EDIT_ITEM_DB', editItem)
    yield takeLatest('EDIT_ROOM_DB', editRoom)
}

export default catalogueSaga;