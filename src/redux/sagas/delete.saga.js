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

function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteSaga;