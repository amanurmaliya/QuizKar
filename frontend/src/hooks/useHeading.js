import {useSelector, useDispatch} from "react-redux"

import {commonSelector} from "../store/features/common/selectors/index"
import {setCommonKey} from "../store/features/common/commonSlice"

export const useHeading = () => {

    // Get the value from the redux store
    const {heading, subHeading} = useSelector(commonSelector)

    const dispatch = useDispatch()

    // Also make the function that changes the value of each one of these
    const setHeading = (value) => {
        dispatch(setCommonKey({key:"heading", value}))
    }
    const setSubHeading = (value) => {
        dispatch(setCommonKey({key : "subHeading", value}))
    }

    return {heading, subHeading, setHeading, setSubHeading};
}

