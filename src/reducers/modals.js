//Expenses Reducer

export default (state = false, action) => {
    switch (action.type){
        case 'RESOLVE_REMOVE_MODAL':
            return action.removeModal
        default:
            return state;
    }
};
