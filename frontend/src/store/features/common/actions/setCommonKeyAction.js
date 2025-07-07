export const setCommonKeyAction = (state, {payload}) => {
    // The Payload structure will be payload = {key, valye}
    const {key, value} = payload;

    state[key] = value;
}