import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsuranceForm from '../InsuranceForm/InsuranceForm';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';


function InsurancePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const insurance = useSelector((store) => store.insurance)



    useEffect(() => {
        dispatch({
            type: 'FETCH_INSURANCE'
        });
    }, []);

    console.log('insurancepage', insurance[0]?.phone);


    return (

        <div>
            <h2>Insurance</h2>
            {/* Conditionally renders the form or stored info. */}
            {insurance[0]?.file ? (
                <div>
                    <p>{insurance[0]?.company}</p>
                    <p>{insurance[0]?.phone}</p>
                    <p>{insurance[0]?.policy}</p>
                    <p>{insurance[0]?.value}</p>
                    <Button variant="contained" color="primary"
                    onClick={() => { history.push('/insurance-edit') }} >
                    Edit
                 </Button>

                </div>

            ) : (
                <div>
                    <InsuranceForm />
                </div>
            )}
        </div>
    )
}

export default InsurancePage;