import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import add from './add.reducer';
import insurance from './insurance.reducer';
import item from './item.reducer';
import room from './room.reducer';
import editItem from './editItem.reducer';
import editRoom from './edit.room.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  add, //contains message indicating if action was successful or not
  insurance, //will have data from DB.  Result controls conditional render on insurance page
  item, //will contain item data from DB.
  room, //will contain room data.
  editItem, //will be state that holds selected items to value to edit
  editRoom, //Will be state that holds selected room values to edit
});

export default rootReducer;
