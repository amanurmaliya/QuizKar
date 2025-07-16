import React from "react"

import { CustomTextInput } from "../customTextInput";
import { CustomTextArea } from "../customTextArea";
import {InputTypes} from "./types/index"
import CustomDropDown from "../../customeDropDown";
import CustomDropDownInput from "../customDropDownInput";

const HandleInputRender = ({inputTypes, ...props}) => {
    switch(inputTypes)
    {
        case InputTypes.TEXT : 
            return <CustomTextInput {...props} />
        case InputTypes.MULTILINE:
            return <CustomTextArea {...props}/>
        case InputTypes.DROPDOWN:
            return <CustomDropDownInput {...props}/>
        default :
            return;
    }
}

export default HandleInputRender;