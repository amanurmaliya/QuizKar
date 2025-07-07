import {createSlice} from "@reduxjs/toolkit";
import {commonInitialState} from "./initialState.js"
import * as Actions from "./actions/index.js"
export * from "./selectors/index.js"

const commonSlice = createSlice({
    name: "teacher-common",
    initialState : commonInitialState,
    reducers : {
        toggleSideBar : Actions.toggleSideBarActions,
        setCommonKey : Actions.setCommonKeyAction
    }

})


export const { toggleSideBar , setCommonKey} = commonSlice.actions;
export default commonSlice.reducer