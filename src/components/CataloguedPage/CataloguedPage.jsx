import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsuranceForm from '../InsuranceForm/InsuranceForm';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';
import CataloguedItemTable from '../CataloguedItemTable/CataloguedItemTable';

function CataloguedPage(){


    return(
        <div>
            <CataloguedItemTable />

        </div>
    )
}

export default CataloguedPage;