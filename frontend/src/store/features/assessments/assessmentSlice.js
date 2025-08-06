import {createSlice} from "@reduxjs/toolkit"
import {assessmentInitialState} from "./initialState"

// This will import everything that has in action index.js and since we use the index.js to import all the actions therefore we have imported all the actions that are available
import * as Actions from "./actions/index"

// This thing contains all the values that are used in the slice so we can directly export it from there
export * from "./selectors"

const assessmentSlice = createSlice({
    name : "assessments",
    initialState : assessmentInitialState,
    reducers : {
        setAssessmentKey : Actions.setAssessmentKeyAction
    }
})

export const {setAssessmentKey} = assessmentSlice.actions;
export default assessmentSlice.reducer;