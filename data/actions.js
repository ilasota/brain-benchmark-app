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