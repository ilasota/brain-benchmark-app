const speedReducer = (state = [], action) => {
    switch(action.type){
        case 'SUBMIT_SPEED':
            return [...state, action.payload];
        default:
            return state
    }
}

export default speedReducer