import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addItem (action){
    try{
        yield axios.post('api/item', action.payload);
        yield put({type: 'SUCCESS'});
    }catch(err) {
        console.log('Error in Add Item', err);
        yield put ({type: 'FAILURE'});
    }
}

function* addSaga(){
    yield takeLatest('ADD_ITEM', addItem);
    // yield takeLatest('ADD_ROOM', addRoom);
}

export default addSaga;