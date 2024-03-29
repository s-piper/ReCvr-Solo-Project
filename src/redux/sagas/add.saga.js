import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Makes the server call for individual items
function* addItem(action) {
    try {
        yield axios.post('api/item', action.payload);
        yield put({ type: 'SUCCESS' });
    } catch (err) {
        console.log('Error in Add Item', err);
        yield put({ type: 'FAILURE' });
    }
}

//Gets items from database
function* fetchItem(action) {
    try {
        const res = yield axios.get('api/item');
        yield put({
            type: 'SET_ITEM',
            payload: res.data,
        })
        console.log('Fetch Item', res.data);
    } catch {
        console.log('Fetch Item Error');
    }
}

//Gets rooms from database
function* fetchRoom(action) {
    try {
        const res = yield axios.get('api/room');
        yield put({
            type: 'SET_ROOM',
            payload: res.data,
        })
        console.log('Fetch Room', res.data);
    } catch {
        console.log('Fetch Room Error');
    }
}



//Makes the server call for rooms
function* addRoom(action) {
    try {
        yield axios.post('api/room', action.payload);
        yield put({ type: 'SUCCESS' });
    } catch (err) {
        console.log('Error in Add Room', err);
        yield put({ type: 'FAILURE' });
    }
}
//Adds insurance
function* addInsurance(action) {
    try {
        yield axios.post('api/insurance', action.payload);
        yield put({ type: 'SET_INSURANCE' })
    } catch (err) {
        console.log('Error in Add Insurance', err);
    }
}

function* addSaga() {
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('ADD_ROOM', addRoom);
    yield takeLatest('ADD_INSURANCE', addInsurance);
    yield takeLatest('FETCH_ITEM', fetchItem);
    yield takeLatest('FETCH_ROOM', fetchRoom);
}

export default addSaga;