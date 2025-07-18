import {LabelPositionTypes} from "../types/index"

export const handleLabelPosition = (labelPosition = LabelPositionTypes.TOP) => {
    switch(labelPosition)
    {
        case LabelPositionTypes.TOP:
            return "flex-col";
        case LabelPositionTypes.LEFT:
            return "flex-row gap-1 items-center";
        default : 
            return ;
    }
}