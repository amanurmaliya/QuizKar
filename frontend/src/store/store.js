import {configureStore} from "@reduxjs/toolkit";

import commonReducer from "./features/common/commonSlice"
import templateReducer from "./features/template/templateSlice"
export const store = configureStore({
    reducer : {
        common : commonReducer,
        template : templateReducer,
    }
})