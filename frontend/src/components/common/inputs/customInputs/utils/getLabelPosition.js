import { InputTypes, LabelPositionTypes } from "../types";

export const getLabelPosition = (inputType = InputTypes.TEXT) => {
    switch(inputType)
    {
        case InputTypes.CHECKBOX: 
            return LabelPositionTypes.RIGHT;
        default : 
            LabelPositionTypes.TOP;
    }
}