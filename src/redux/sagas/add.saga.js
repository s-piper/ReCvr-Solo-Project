import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addItem (action){
    try{
        yield axios.post('api/item')
    }


}

function* addSaga(){
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('ADD_ROOM', addRoom);
}