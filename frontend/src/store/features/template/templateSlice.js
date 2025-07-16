import {createSlice} from "@reduxjs/toolkit"
import {templateInitialState} from "./initialState"

// This will import everything that has in action index.js and since we use the index.js to import all the actions therefore we have imported all the actions that are available
import * as Actions from "./actions/index"

// This thing contains all the values that are used in the slice so we can directly export it from there
export * from "./selectors"

const templateSlice = createSlice({
    name : "template",
    initialState : templateInitialState,
    reducers : {
        setTemplateKey : Actions.setTemplateKeyAction,
        addNewQuestionType : Actions.addNewQuestionTypeAction,
        removeQuestionType : Actions.removeQuestionTypeAction,
        updateQuestionTypeData : Actions.updateQuestionTypeDataAction,
        updateQuestionTypeOptions : Actions.updateQuestionTypeOptionAction
    }
})

export const {setTemplateKey, addNewQuestionType, removeQuestionType, updateQuestionTypeData, updateQuestionTypeOptions} = templateSlice.actions;
export default templateSlice.reducer;