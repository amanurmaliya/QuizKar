import React, { useEffect, useState } from "react";
import TemplateBasicDetailsForm from "../../../../components/teacher/template/create/basicDetailsForm";

import { useHeading } from "../../../../hooks/index";
import AddQuestionType from "./addQuestionType";
import QuestionTypes from "../../../../components/teacher/template/questionTypes";
const CreateTemplatePage = () => {
  
  const { setHeading, setSubHeading } = useHeading();
  
  useEffect(() => {
    setHeading("Create Template");
    setSubHeading("Create a new Template for your Assessments");
  }, []);

  
  return (
    <div className=" w-full">
      <TemplateBasicDetailsForm />
      <hr className="my-4" />

        <QuestionTypes />
      <hr className="my-4" />
        <AddQuestionType />
    </div>
  );
};

export default CreateTemplatePage;
