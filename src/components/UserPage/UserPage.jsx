import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import './UserPage.css';




// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { Container, Typography } from '@material-ui/core';
// import Card from 'react';
// import CardHeader from '@material-ui/core/CardHeader'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActionArea from '@material-ui/core/CardActionArea';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  const history = useHistory();

  const moveToDecision = () =>{
    console.log('Add items click');
    history.push('/decision')
  };
  const moveToCataloged = () =>{
    history.push()
  };
  const moveToInsurance = () =>{
    history.push('/insurance')
  };




  return (

    <div className="userPageSet">
      <div className="userPageBox" onClick={moveToDecision}>
        <h2>Add Items</h2>
        <img src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
          width="250px"
          height="250px"
          />
        <p>Start saving your items</p>

      </div>

      <div className="userPageBox" onClick={moveToCataloged}>
        <h2>Catalogued</h2>
        <img src="https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          width="250px"
          height="250px"
          />
        <p>View Saved Items</p>

      </div>

      <div className="userPageBox" onClick={moveToInsurance}>
        <h2>Insurance</h2>
        <img src="https://images.pexels.com/photos/7821914/pexels-photo-7821914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          width="250px"
          height="250px"
          />
        <p>Your Insurance</p>

      </div>





    </div>
    
   
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
