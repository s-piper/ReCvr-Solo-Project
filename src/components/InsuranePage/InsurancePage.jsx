import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsuranceForm from '../InsuranceForm/InsuranceForm';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function InsurancePage() {

    const dispatch = useDispatch();
    const insurance = useSelector((store)=>store.insurance)

    console.log(insurance);

    useEffect(()=>{
        dispatch({
            type:'FETCH_INSURANCE'
        });
    }, []);



    return (

        <div>
            <h2>Insurance</h2>

            <InsuranceForm />

            <Button variant="contained" color="primary"
                    onClick={handleSave} >
                    Save
                 </Button>
        </div>
    )
}

export default InsurancePage;