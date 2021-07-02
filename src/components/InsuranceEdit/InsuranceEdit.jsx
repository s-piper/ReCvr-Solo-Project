import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';


function InsuranceEdit() {

    const dispatch=useDispatch();
    const history = useHistory();
    const insurance = useSelector((store) => store.insurance)


    const[company, setCompany]=useState('');
    const[phone, setPhone]=useState(0);
    const[policy, setPolicy]=useState('');
    const[value, setValue]=useState(0);

    const handleSave = () =>{
        //Packages up inputs to put
      const editInsurance={
            company: company,
            phone: phone,
            policy: policy,
            value: value,
        }
        dispatch({type:'EDIT_INSURANCE', payload: editInsurance});
        history.push('/insurance');
    }

    return (

        <div>
            <TextField
                onChange={(event) => setCompany(event.target.value)}
                id="outlined-basic"
                label={insurance[0]?.company}
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPhone(event.target.value)}
                id="outlined-basic"
                label={insurance[0]?.phone}
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPolicy(event.target.value)}
                id="outlined-basic"
                label={insurance[0]?.policy}
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setValue(event.target.value)}
                id="outlined-basic"
                label={insurance[0]?.value}
                variant="outlined"
                required />
            <Button variant="contained" color="primary"
                onClick={handleSave} >
                Save
            </Button>
            <Button variant="contained" color="secondary"
                onClick={() => { history.push('/insurance') }}>
                Cancel
            </Button>


        </div>
    )
}


export default InsuranceEdit;