import React from "react";
import HandleInputRender from "./HandleInputRender";
import {LabelPositionTypes} from "../customInputs/types"
import {handleLabelPosition} from "./utils/index"
const   CustomInputs = (props) => {
  const { id, label ,labelPosition = LabelPositionTypes.TOP, ...rest} = props;
  return (
    <div className="flex flex-col gap-1 w-full">
    <div className={`flex ${handleLabelPosition(labelPosition)} gap-1 w-full`}>

      {label && <label htmlFor={id} className="text-sm shrink-0">
        {label}
      </label>}
      <HandleInputRender {...rest} />
    </div>
    </div>
  );
};

export { CustomInputs };
