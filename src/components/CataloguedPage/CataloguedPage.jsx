import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsuranceForm from '../InsuranceForm/InsuranceForm';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';
import CataloguedItemTable from '../CataloguedItemTable/CataloguedItemTable';
import CataloguedRoomTable from '../CataloguedRoomTable/CataloguedRoomTable';
import EnhancedTable from '../ItemTableUi/ItemTableUi';

function CataloguedPage(){


    return(
        <div>

            <h2>Items</h2>
            <EnhancedTable />

            <h2>Rooms</h2>
            <CataloguedRoomTable />

        </div>
    )
}

export default CataloguedPage;