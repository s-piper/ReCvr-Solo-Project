import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function InsuranceForm() {

    const dispatch=useDispatch();

    const[company, setCompany]=useState('');
    const[phone, setPhone]=useState(0);
    const[policy, setPolicy]=useState('');
    const[value, setValue]=useState(0);

    const handleSave = () =>{
        //Packages up inputs to post
      const newInsurance={
            company: company,
            phone: phone,
            policy: policy,
            value: value,
        }
        dispatch({type:'ADD_INSURANCE', payload: newInsurance})
        dispatch({type: 'FETCH_INSURANCE'});
    }


    return (

        <div>

            <TextField
                onChange={(event) => setCompany(event.target.value)}
                id="outlined-basic"
                label="Company"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPhone(event.target.value)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPolicy(event.target.value)}
                id="outlined-basic"
                label="Policy Number"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setValue(event.target.value)}
                id="outlined-basic"
                label="Policy Value"
                variant="outlined"
                required />
            <Button variant="contained" color="primary"
                    onClick={handleSave} >
                    Save
                 </Button>



        </div>
    )
}

export default InsuranceForm;