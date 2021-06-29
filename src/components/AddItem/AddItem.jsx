import React from 'react';

import Button from '@material-ui/core/Button';


function AddItem() {

    return (
        <div>
            <div>
                <h2>Individual Item</h2>

                <form>
                    <input required placeholder="Item Name*" /> 
                    <br />
                    <input required placeholder="Brand*" />
                    <br />
                    <input placeholder="Model" />
                    <br />
                    <input placeholder="Picture/Video URL" />
                    <br />
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                    <p>*Required</p>
                </form>
            </div>

        </div>
    )
}

export default AddItem;