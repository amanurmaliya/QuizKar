import React from "react";
import { CustomInputs } from "../../../common/inputs/customInputs";
import { InputTypes } from "../../../common/inputs/customInputs/types";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../store/features/template/selectors";
import { useDispatch } from "react-redux";
import { updateQuestionTypeOptions } from "../../../../store/features/template/templateSlice";
import { getQuestionTypeOptions } from "./utils";

const Options = ({ index }) => {
  const { questionTypes } = useSelector(templateSelector);
  const questionType = questionTypes[index];
  if (!questionType) return null;
  const options = getQuestionTypeOptions(questionType.type)  
  const dispatch = useDispatch()
  const handleChange = (key, value) => {
    
    dispatch(updateQuestionTypeOptions({index, key, value}))
  }
  return (
    <div>
      <h2 className="font-semibold text-md">Options</h2>
      {options.map((option) => (
        <CustomInputs
          key={option.id}
          inputTypes={InputTypes.CHECKBOX}
          value={questionType.data.options[option.id]}
          onChange={(value) => handleChange(option.id, value)}
          label={option.label}
        />
      ))}
      <div className="flex flex-row justify-center items-center"></div>
    </div>
  );
};

export default Options;
