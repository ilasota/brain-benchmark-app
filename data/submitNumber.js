export const submitNumber = (score) => {
    return{
        type: 'SUBMIT',
        payload: score,
    };
};