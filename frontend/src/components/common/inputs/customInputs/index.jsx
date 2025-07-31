import React from "react";
import HandleInputRender from "./HandleInputRender";
import { LabelPositionTypes } from "../customInputs/types";
import { getContainerLabelStyling, getLabelPosition, handleLabelPosition } from "./utils/index";
const CustomInputs = (props) => {
  const {
    id,
    label,
    labelPosition = getLabelPosition(props.inputTypes),
    labelContainerClassName = getContainerLabelStyling(props.inputTypes),
    ...rest
  } = props;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`flex ${labelContainerClassName} ${handleLabelPosition(labelPosition)} gap-1`}
      >
        {label && (
          <label htmlFor={id} className="text-sm shrink-0">
            {label}
          </label>
        )}
        <HandleInputRender {...rest} label={label} />
      </div>
    </div>
  );
};

export { CustomInputs };
