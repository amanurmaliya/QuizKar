export const removeQuestionTypeAction = (state, {payload}) => {
    const {index} = payload;

    state.questionType.splice(index, 1) // splice is used to remove the element from the index and 1 is the first element will be removed from the index
}