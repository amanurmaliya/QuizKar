import React from "react";
import { ChevronDown, CheckIcon } from "lucide-react";
import CustomDropDown from "../../customeDropDown";
import { PlusIcon } from "lucide-react";

const CustomDropDownInput = ({
  value = "",
  label = "",
  options = [],
  onChange,
}) => {
  const handleChange = (option) => {
    onChange(option.id);
  };
  return (
    <CustomDropDown
      trigger={
        <div className="w-full flex flex-row justify-between items-center border border-black p-1 rounded-md text-sm">
          {value ? (
            options.find((opt) => opt.id == value)?.label
          ) : (
            <span className="text-gray-400 flex items-center gap-1">
              <PlusIcon size={16} />
              {label}
            </span>
          )}
          <ChevronDown className="text-gray-500" />
        </div>
      }
    >
      {/* This portion will be treated as the children */}
      {options.map((option) => (
        <div
          onClick={() => handleChange(option)}
          key={option.id}
          className="p-1 flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md"
        >
          {value === option.id && <CheckIcon size={16} />}
          <span>{option.label}</span>
        </div>
      ))}
    </CustomDropDown>
  );
};

export default CustomDropDownInput;
