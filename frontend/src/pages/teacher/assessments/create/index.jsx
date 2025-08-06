import React, { useEffect, useState } from "react";
import TemplateBasicDetailsForm from "../../../../components/teacher/template/create/basicDetailsForm";

import { useHeading } from "../../../../hooks/index";
import AddQuestionType from "./addQuestionType";
import QuestionTypes from "../../../../components/teacher/template/questionTypes";
import { CustomInputs } from "../../../../components/common/inputs/customInputs";
import { InputTypes } from "../../../../components/common/inputs/customInputs/types";
import { useSelector } from "react-redux";
import { assessmentsSelector } from "../../../../store/features/assessments/selectors";
import { useDispatch } from "react-redux";
import { setAssessmentKey } from "../../../../store/features/assessments/assessmentSlice";
const CreateAssessmentPage = () => {
  const { setHeading, setSubHeading } = useHeading();
  const dispatch = useDispatch();

  useEffect(() => {
    setHeading("Create Assessment");
    setSubHeading("Create will help you to create multiple assessments");
  }, []);

    const handleChange = (key, value) => {
      dispatch(setAssessmentKey({key, value}))
    }
  const {template, title, description} = useSelector(assessmentsSelector)
  return (
    <div className=" w-full">
      <form className="flex flex-col gap-3">
        <CustomInputs
          inputTypes={InputTypes.DROPDOWN}
          label="Select Template"
          value={template || "Choose from the Templates"}
          placeholder="Choose From Templates"
          onChange={(value)=> handleChange("template", value)}
          />
        <CustomInputs
          inputTypes={InputTypes.TEXT}
          label="Assessment Title"
          placeholder="E.g., Math Quiz 1.0"
          value={title}
          onChange={(value)=> handleChange("title", value)}
          />

        <CustomInputs
          inputTypes={InputTypes.MULTILINE}
          label="Description"
          value={description}
          placeholder="E.g., This is the quiz to test your knowledge for Maths"
          onChange={(value)=> handleChange("description", value)}
        />
      </form>
    </div>
  );
};

export default CreateAssessmentPage;
