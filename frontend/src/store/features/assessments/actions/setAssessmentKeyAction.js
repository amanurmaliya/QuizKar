export const setAssessmentKeyAction = (state, {payload}) => {
    const {key, value} = payload;

    state[key] = value;
}