import React from "react";
import { ChevronDown, CheckIcon } from "lucide-react";
import CustomDropDown from "../../customeDropDown";

const CustomDropDownInput = ({value="", label="", options=[], onChange}) => {

  return (
    <CustomDropDown
      trigger={
        <div className="w-full flex flex-row justify-between items-center border border-black p-1 rounded-md text-sm">
          {label}
          <ChevronDown className="text-gray-500" />
        </div>
      }
    >
      {/* This portion will be treated as the children */}
      {options.map((option) => (
        <div
            onClick={()=> onChange(option.id)}
          key={option.id}
          className="p-1 flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md"
        >
            {value === option.id && <CheckIcon size={16} /> }
          <span>
          {option.label}
          </span>
        </div>
      ))}
    </CustomDropDown>
  );
};

export default CustomDropDownInput;
