import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewQuestionType } from "../../../../../store/features/template/templateSlice";
import { InputTypes } from "../../../../../components/common/inputs/customInputs/types";
import CustomDropDownInput from "../../../../../components/common/inputs/customDropDownInput";
import {questionOptions} from "../../../../../utils"
import { PlusIcon } from "lucide-react";
import { CustomInputs } from "../../../../../components/common/inputs/customInputs";
const  AddQuestionType = () => {
  const [selectedValue, setSelectedValue] = useState("")
    const dispatch = useDispatch();
  const handleAddQuestionType = (value) => {
    setSelectedValue(value);
    dispatch(addNewQuestionType({questionType : value}))
  }

    return (
        <CustomInputs
        inputTypes={InputTypes.DROPDOWN}
        label={"Add Question Type"}
        value={selectedValue}
        onChange={handleAddQuestionType}
        options={questionOptions}
      />
    )
}

export default AddQuestionType;