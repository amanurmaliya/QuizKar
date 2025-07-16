import {getEmptyQuestion} from "../../utils"

export const addNewQuestionTypeAction = (state, action) => {
    const {questionType} = action.payload; // Here by default we get the action | we can directly destructure to payload and then to the elements
    const newQuestion = getEmptyQuestion({type : questionType});

    state.questionTypes.push(newQuestion);
}