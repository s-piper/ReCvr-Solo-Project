import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInsurance(action) {
    try{
       const res = yield axios.get('api/insurance');
            yield put({
                type:'SET_INSURANCE',
                payload: res.data,
            });
            console.log('fetch data', res.data);
            
    }catch(err) {
        console.log('Fetch Insurance Error', err);
        
    }
}

function* insuranceSaga(){
    yield takeLatest('FETCH_INSURANCE', fetchInsurance)
}

export default insuranceSaga;