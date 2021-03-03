export const numberSubmit = (score) => {
    return{
        type: 'SUBMIT_NUMBER',
        payload: score,
    };
};

export const reactionSubmit = (score) => {
    return{
        type: 'SUBMIT_REACTION',
        payload: score,
    };
};

export const speedSubmit = (score) => {
    return{
        type: 'SUBMIT_SPEED',
        payload: score,
    };
};

export const chimpSubmit = (score) => {
    return{
        type: 'SUBMIT_CHIMP',
        payload: score,
    };
};