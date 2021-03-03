const numberReducer = (state = [1, 2, 3], action) => {
    switch(action.type){
        case 'SUBMIT':
            return [...state, 5];
        default:
            return state
    }
}

export default numberReducer