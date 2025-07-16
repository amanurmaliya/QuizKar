export const updateQuestionTypeOptionAction = (state , {payload}) => {
    const {index, key, value} = payload;

    const questionType = state.questionTypes[index]

    if(!questionType) return;

    // This will update the options inside the questions
    questionType.data.options[key] = value;
}