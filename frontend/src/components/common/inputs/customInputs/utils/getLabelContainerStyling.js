import { InputTypes } from "../types";

export const getContainerLabelStyling = (inputType = InputTypes.TEXT) => {
    switch(inputType)
    {
        case InputTypes.CHECKBOX: 
            return 'w-fit';
        default : 
            return "";
    }
}