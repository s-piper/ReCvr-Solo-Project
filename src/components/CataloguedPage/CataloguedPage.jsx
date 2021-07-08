import React, { useState, useEffect } from 'react';
import ItemTable from '../ItemTableUi/ItemTableUi';
import RoomTable from '../RoomTableUi/RoomTableUi';
import './CataloguedPage.css'

function CataloguedPage(){


    return(
        <div>

            <h2 className="headerCatalogue">Items</h2>
            <ItemTable />

            <h2 className="headerCatalogue">Rooms</h2>
            <RoomTable />

        </div>
    )
}

export default CataloguedPage;