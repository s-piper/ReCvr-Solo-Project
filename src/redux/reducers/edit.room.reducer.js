const editRoomReducer = (state={}, action) =>{
    switch(action.type){
        case 'EDIT_ROOM':
            return action.payload;
        default:
            return state;
    }
}

export default editRoomReducer;