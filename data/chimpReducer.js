const chimpReducer = (state = [], action) => {
    switch(action.type){
        case 'SUBMIT_CHIMP':
            return [...state, action.payload];
        default:
            return state
    }
}

export default chimpReducer