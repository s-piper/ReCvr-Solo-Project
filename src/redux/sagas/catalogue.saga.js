import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editItem(action) {
    try {
        yield axios.put('api/item', action.payload);
    } catch {
        console.log('Error in Item Edit Saga');
    }
}


function* catalogueSaga() {
    yield takeLatest('EDIT_ITEM_DB', editItem)
}

export default catalogueSaga;