import React from 'react';
import './AddItemsDecision.css';
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button';


function AddItemsDecision() {

    const history = useHistory();

    return (
        //Displays a block with description. Button pushes to next page
        <div className="decisionPageSet">
            <div className="decisionPageBox">
                <h2>Individual Item</h2>
                <img src="https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    width="350px"
                    height="250px" />
                <p>Expensive Items</p>
                <p>Appliances, TV, PC</p>
                <Button variant="contained" color="primary"
                    onClick={() => { history.push('/item') }} >
                    Add Item
                 </Button>
            </div>

            {/* //Displays a block with description. Button pushes to next page */}
            <div className="decisionPageBox">
                <h2>New Room</h2>
                <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    width="350px"
                    height="250px"
                />
                <p>
                    Pick a room and describe
                    what's in it.
                    </p>
                <p>
                    Bedroom: 9 Levis Jeans, 2 Ikea Nightstands
                    </p>
                <Button variant="contained" color="primary"
                    onClick={() => { history.push('/room') }} >
                    Add Room
                 </Button>
            </div>
        </div>
    )
}

export default AddItemsDecision;