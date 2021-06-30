const addReducer = (state='', action) =>{
    switch(action.type){
        case 'SUCCESS':
            return 'Success!';
        case 'FAILURE':
            return 'Please Try Again';
        default:
            return state;
    }
}

export default addReducer;